import React from 'react'
import { Link, Outlet } from 'react-router-dom'




const Header = () => {


    const logout = () => {
        window.open(`${process.env.REACT_APP_URL}/auth/logout`, "_self");
    };

    return (
        <div >

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        
                        <li class="nav-item">
                            <Link class="nav-link" onClick={logout}>
                                Log Out
                            </Link>
                        </li>



                    </ul>
                </div>
            </nav>




            <div>
                <Outlet />
            </div>



        </div>
    )
}

export default Header