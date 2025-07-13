import mqtt from "mqtt"

const mqttUrl=import.meta.env.VITE_MQTT_URL || 'ws://localhost:9001'
const client = mqtt.connect(mqttUrl) // pastikan broker support WebSocket

client.on('connect', () => {
  console.log('Connected to MQTT broker')
  client.subscribe('mytopic/data')
})

client.on('message', (topic, message) => {
  console.log(`Received [${topic}]:`, message.toString())
  // Bisa update state di sini atau pakai EventEmitter/context
})

export default client
