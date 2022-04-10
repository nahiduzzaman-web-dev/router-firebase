import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div className='register-container'>
            <div className="wrap">

                <div>
                    <fieldset>
                        <legend><h3>Login</h3></legend>
                        <input type="text" name="email" placeholder="Email" />
                        <input type="password" name="psw" placeholder="Password" />

                        <div>
                            <h2>Or login with</h2>
                            <button><i className="fa fa-facebook"></i>Facebook</button>
                            <button onClick={handleGoogleSignIn}><i className="fa fa-google-plus"></i>Google</button>
                            <button><i className="fa fa-twitter"></i>Twitter</button>
                        </div>
                        <input type="submit" value="Submit" />
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;