import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logInUser, signOutUser} from "../../redux/actions/index.jsx";
import fire from "../../configs/index.js";

const Header = () => {
    const {isAuthenticated , user} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    return (
        <div className={'bg-black text-white p-2 w-full'}>
            <div className={'w-[90%] flex items-center justify-between mx-auto'}>
                <Link to={'/'}>
                    <span className={'text-lg font-semibold'}>React File Management System</span>
                </Link>
                <div className={'flex justify-between items-center gap-4'}>
                    {
                        isAuthenticated ?
                            <>
                        <span className={'text-sm font-semibold'}>Welcome,</span><span className={'text-md font-bold -ml-2'}>{user.name || user.displayName}</span>
                              <Link to={'/dashboard'}>
                                  <button className={'bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600'}> Dashboard</button>
                              </Link>
                                <button onClick={()=> {
                                    fire.auth().signOut().then(()=>{
                                        dispatch(signOutUser())
                                    })
                                }} className={'bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600'}>
                                    logout
                                </button>

                        </> :
                            <>
                                     <Link to={'/login'}>
                                         <button className={'bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600'}>
                                             Login
                                        </button>
                                     </Link>
                                 <Link to={'/register'}>
                                 <button className={'bg-amber-400 text-white px-4 py-2 rounded hover:bg-amber-600'}>register</button>
                                 </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
