import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register-container'>
            <div className="wrap">
                <form>
                    <fieldset>
                        <legend><h3>Register</h3></legend>
                        <input type="text" name="yourName" placeholder="Your Name" />
                        <input type="text" name="email" placeholder="Email" />
                        <input type="password" name="psw" placeholder="Password" />

                        <form>
                            <h2>Or register with</h2>
                            <button><i className="fa fa-facebook"></i>Facebook</button>
                            <button><i className="fa fa-google-plus"></i>Google</button>
                            <button><i className="fa fa-twitter"></i>Twitter</button>
                        </form>
                        <input type="submit" value="Submit" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;