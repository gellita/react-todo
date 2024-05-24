import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react';
import App from './App';
import todoStore from './store/todoStore';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider todoStore={todoStore}>
          <App />
      </Provider>,
  </React.StrictMode>,
)
