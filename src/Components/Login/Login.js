import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
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
                            <button onClick={signInWithGoogle}><i className="fa fa-google-plus"></i>Google</button>
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