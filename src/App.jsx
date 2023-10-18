// import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes, useParams} from "react-router-dom"
import LoginComponent from "./components/LoginComponent/index.jsx";
import RegisterComponent from "./components/RegisterComponent/index.jsx";
import HomeComponent from "./components/HomeComponent/index.jsx";
import DashboardComponent from "./components/DashboardComponent/index.jsx";
import {useEffect} from "react";
import fire from "./configs/index.js";
import {logInUser} from "./redux/actions/index.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function App() {
    const dispatch = useDispatch()




    useEffect(() => {
        fire.auth().onAuthStateChanged((user)=>{
            if (user){
                dispatch(logInUser({
                    uid:user.uid,
                    displayName:user.displayName,
                    email:user.email
                }))
            }
        })
    }, []);







  return (
    <Routes>
        <Route path={'/'} element={<HomeComponent/>}/>
        <Route path={'login'} element={<LoginComponent/>}/>
        <Route path={'register'} element={<RegisterComponent/>}/>
        <Route path={'dashboard/*'} element={<DashboardComponent/>}/>
    </Routes>
  )
}

export default App
