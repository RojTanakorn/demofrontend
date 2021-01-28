import './App.css';
import React, { useEffect } from 'react';
import { w3cwebsocket } from "websocket";

function App() {
  const clientSocket = new w3cwebsocket('ws://127.0.0.1:8000/ws/mode/sw00001/')

  useEffect(() => {
    clientSocket.onopen = () => {
      console.log('Websocket client connected')
    }
  }, []);

  const SendPayloadHandler = () => {
    var payload = {
      hardware_id: 'hw0001',
      employee_id: 1,
      mode: 1,
      stage: 0,
      pallet_id: 'AAAAAAAA',
      pallet_weight: 25.50,
      location: '1021111111'
    }

    console.log('Button is clicked')
    clientSocket.send(JSON.stringify(payload))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => SendPayloadHandler()}>Send payload</button>
      </header>
    </div>
  );
}

export default App;
