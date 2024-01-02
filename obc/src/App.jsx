/* eslint-disable react/no-unescaped-entities */
import Title from "./Title"
import Subtitle from "./Subtitle"

export default function App() {
  const status = true

  return (
    <div>
      <Title/>
      <Subtitle/>
      <h2>Current Status: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}