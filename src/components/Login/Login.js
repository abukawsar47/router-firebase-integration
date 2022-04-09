import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={singInWithGoogle}>Google Sign in</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Enter Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;