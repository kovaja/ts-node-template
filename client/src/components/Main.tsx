import React, { ReactElement, useState } from 'react';

import './Main.css';
import { useApiTest } from '../services/useApiTest';

export function Main(): ReactElement {
  const { loading, getData } = useApiTest()
  const [message, setMessage] = useState(null)

  const onPingClick = async () => {
    setMessage(null);
    const newMessage = await getData()
    setMessage(newMessage)
  }

  return (
    <div className="app-container">
      <div className="header">
        <div className="header-row">
          <div>
            <h1>ts-node-template <span>by Kovaja</span></h1>
          </div>
        </div>
      </div>

      <div className="content">
        <div style={{textAlign: 'center'}}>
          <button className="pure-button" type="button" onClick={onPingClick}>PING</button>
          <p>{loading ? 'LOADING...' : null}</p>
          <p>{message}</p>
        </div>
      </div>

      <div className="footer">
        <span>ts-node-template by Kovaja</span>
        <span>
            2025
            <span className="version">(0.0.4)</span>
          </span>
      </div>
    </div>
  );
}
