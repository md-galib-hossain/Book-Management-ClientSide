import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Provider store ={store}>

    <App />
    </Provider>
   
  </React.StrictMode>,
)
