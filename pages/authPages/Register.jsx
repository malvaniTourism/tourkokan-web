import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../.././styles/Login.module.css";

function Register() {

    const initFormData = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role_id: '',
        mobile: ''
    }
    const initShow = {
        password: false,
        confirm_password: false
    }
    const [formData, setFormData] = useState(initFormData);
    const [show, setShow] = useState(initShow);
    const [error, setError] = useState(initFormData);

    const togglePasswordVisibility = (name) => {
        setShow({
            ...show,
            [name]: !(show[name])
        });
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://tourkokan.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {

                console.log('Register in successfully:', data);

            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('An error occurred during Register:', error);
            window.alert('An error occurred during Register.');
        }
    };

    const handleEvent = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });

        setError({
            ...error,
            [event.target.id]: ''
        });

    }
    return (
        <div className={`${styles.loginContainer} rainbow-background`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center">Register</h2>
                                <form onSubmit={handleRegister} className='mt-3'>
                                    <div className="mb-3 row">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder='Enter Name'
                                                value={formData?.name}
                                                onChange={handleEvent}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="email" className="col-sm-3 col-form-label">
                                            Email
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                placeholder='Enter Name'
                                                value={formData?.email}
                                                onChange={handleEvent}
                                            />
                                            {error?.email && <p className="text-danger">{error?.email}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="col-sm-3 col-form-label">
                                            Password
                                        </label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input
                                                    type={show?.password ? 'text' : 'password'}
                                                    className="form-control"
                                                    id="password"
                                                    placeholder='Enter Password'
                                                    value={formData?.password}
                                                    onChange={handleEvent}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={()=>togglePasswordVisibility('password')}
                                                >
                                                    {show?.password ? 'Hide' : 'Show'}
                                                </button>
                                            </div>
                                            {error?.password && <p className="text-danger">{error?.password}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password_confirmation" className="col-sm-3 col-form-label">
                                            Confirm Password
                                        </label>
                                        <div className="col-sm-9">
                                            <div className="input-group">
                                                <input
                                                    type={show?.password_confirmation ? 'text' : 'password'}
                                                    className="form-control"
                                                    id="password_confirmation"
                                                    placeholder='Enter Confirm Pasword'
                                                    value={formData?.password_confirmation}
                                                    onChange={handleEvent}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={()=>togglePasswordVisibility('password_confirmation')}
                                                >
                                                    {show?.password_confirmation ? 'Hide' : 'Show'}
                                                </button>
                                            </div>
                                            {error?.password && <p className="text-danger">{error?.password}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="role_id" className="col-sm-3 col-form-label">
                                            Role Id
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="role_id"
                                                placeholder='Enter Role Id'
                                                value={formData?.role_id}
                                                onChange={handleEvent}
                                            />
                                            {error?.role_id && <p className="text-danger">{error?.role_id}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="contact" className="col-sm-3 col-form-label">
                                            Mobile Number
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="Number"
                                                className="form-control"
                                                id="mobile"
                                                placeholder='Enter Mobile Number'
                                                value={formData?.mobile}
                                                onChange={handleEvent}
                                            />
                                            {error?.mobile && <p className="text-danger">{error?.mobile}</p>}
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="submit" className="btn btn-primary">
                                                Register
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary ms-2"
                                                onClick={() => console.log('go to login page')}
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Register