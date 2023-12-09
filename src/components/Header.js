import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
   
    const {userinfo } = useSelector(
        (state) => state.user
    )
    
    return (
        <div >
        {
            userinfo?<nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Sign Up </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signin">Sign In</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            :""
           
        }
        
            <div>
                <Outlet/>
            </div>

            
            
        </div>
    )
}

export default Header