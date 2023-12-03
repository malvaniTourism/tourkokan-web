import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../.././styles/Login.module.css";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        // Make an asynchronous API call
        const response = await fetch('https://tourkokan.com/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'email': email, 'password': password }),
        });

        // Parse the response JSON
        const data = await response.json();

        // Check if the login was successful
        if (data.success) {
          // If the response is successful, you can handle the data here

          console.log('Logged in successfully:', data);

          // Redirect to the dashboard or perform any other action
          // router.push('/dashboard');
        } else {
          // If the response is not successful, handle the error
          setError(data.message || 'Login failed.');
        }
      } else {
        setError('Please enter valid credentials.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred during login.');
    }
  };


  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };
  return (
    <div className={`${styles.loginContainer} rainbow-background`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <form onSubmit={handleLogin} className='mt-3'>
                  <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-3 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-3 col-form-label">
                      Password
                    </label>
                    <div className="col-sm-9">
                      <div className="input-group">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          id="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </div>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <div className="mb-3 text-center">
                    <a href="#" onClick={handleForgotPassword}>
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-2"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Login;
