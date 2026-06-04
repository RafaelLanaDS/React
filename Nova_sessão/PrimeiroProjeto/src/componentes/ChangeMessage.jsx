import React from 'react'

const ChangeMessage = ({hanleMessage}) => {
    const messages = ["oi", "ola", "tudo bem"];
  return (
    <div>
      <button onClick={() => hanleMessage(messages[0])}>1</button>
      <button onClick={() => hanleMessage(messages[1])}>2</button>
      <button onClick={() => hanleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage
