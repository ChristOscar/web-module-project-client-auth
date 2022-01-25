import React from "react";

const Header = () => {
    const isLoggedIn = localStorage.getItem('token');
    return(
        <div>
            
                <h2>FRIENDS DATABASE</h2>
                <div className='nav'>
                    <a href='/login'><p>LOGIN</p></a>
                    <a href='/friends'><p>FRIENDLIST</p></a>
                    <a href='/friends/add'><p>ADDFRIEND</p></a>
                    <a href='/logout'><p>LOGOUT</p></a>
                </div>
            
            <hr />
        </div>
    )
}

export default Header;