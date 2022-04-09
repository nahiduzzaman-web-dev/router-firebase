import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/register'>Register</Link>
                <span className='user-name'>{user?.displayName && user.displayName}</span>
                <span><img src={user?.photoURL && user.photoURL} alt="" /></span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut} className='sign-out'>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;