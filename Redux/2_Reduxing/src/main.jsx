import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/Store.jsx'
import UserContextProvider from './context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot( document.getElementById( 'root' ) ).render(


  <Provider store={ store }>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </Provider>

)
