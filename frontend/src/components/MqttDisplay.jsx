import React, { useEffect, useState } from 'react'
import client from '../mqtt/mqttClient'

const MqttDisplay = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const handleMessage = (topic, message) => {
      if (topic === 'mytopic/data') {
        setData(message.toString())
      }
    }

    client.on('message', handleMessage)
    return () => client.off('message', handleMessage)
  }, [])

  return <div>Pesan dari Go: {data}</div>
}

export default MqttDisplay
