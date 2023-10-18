import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/index.jsx";
import "react-toastify/dist/ReactToastify.min.css"
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <Header/>
              <App />
              <ToastContainer position={'bottom-right'}/>
          </Provider>
      </BrowserRouter>
  // </React.StrictMode>,
)
