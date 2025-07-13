import React, { useEffect, useState } from 'react'
import client from '../mqtt/mqttClient'

const MqttDisplay = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const handleMessage = (topic, message) => {
      if (topic === 'mytopic/data') {
        try{
          const payload = JSON.parse(message.toString());
          //console.log("JSON payload:", payload);
          const onlyMessage = payload.message;
          setData(onlyMessage)
        }catch (e){
          console.error("Failed to parse JSON:", e);
        }

      }
    }

    client.on('message', handleMessage)
    return () => client.off('message', handleMessage)
  }, [])

  return <div>Pesan dari Go: {data}</div>
}

export default MqttDisplay
