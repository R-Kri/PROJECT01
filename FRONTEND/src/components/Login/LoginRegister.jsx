import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegisterForm = () => {
    const [activeForm, setActiveForm] = useState('login');
    const [formData, setFormData] = useState({
        login: { username: '', password: '', remember: false },
        register: { username: '', email: '', password: '', confirmPassword: '', terms: false },
    });
    const [errors, setErrors] = useState({});

    const switchForm = (type) => {
        setActiveForm(type);
    };

    const handleInputChange = (e, formType, field) => {
        const value = field === 'remember' || field === 'terms' ? e.target.checked : e.target.value;
        setFormData((prev) => ({
            ...prev,
            [formType]: { ...prev[formType], [field]: value },
        }));
    };

    const validateForm = (formType) => {
        const currentData = formData[formType];
        const newErrors = {};
        if (formType === 'register') {
            if (currentData.password !== currentData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }
        Object.keys(currentData).forEach((field) => {
            if (!currentData[field] && field !== 'remember' && field !== 'terms') {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e, formType) => {
        e.preventDefault();
        if (validateForm(formType)) {
            console.log(`${formType} form submitted`, formData[formType]);
            alert(`${formType.charAt(0).toUpperCase() + formType.slice(1)} successful!`);
            setFormData((prev) => ({
                ...prev,
                [formType]: formType === 'login'
                    ? { username: '', password: '', remember: false }
                    : { username: '', email: '', password: '', confirmPassword: '', terms: false },
            }));
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <div className="button-box">
                    <div className="btn-indicator" style={{ transform: activeForm === 'login' ? 'translateX(0)' : 'translateX(100%)' }} />
                    <button className={`toggle-btn ${activeForm === 'login' ? 'active' : ''}`} onClick={() => switchForm('login')}>
                        Login
                    </button>
                    <button className={`toggle-btn ${activeForm === 'register' ? 'active' : ''}`} onClick={() => switchForm('register')}>
                        Register
                    </button>
                </div>

                {activeForm === 'login' && (
                    <div className="input-group login">
                        <form onSubmit={(e) => handleSubmit(e, 'login')}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Username or Email"
                                    value={formData.login.username}
                                    onChange={(e) => handleInputChange(e, 'login', 'username')}
                                    required
                                />
                                {errors.username && <div className="error-message">{errors.username}</div>}
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Password"
                                    value={formData.login.password}
                                    onChange={(e) => handleInputChange(e, 'login', 'password')}
                                    required
                                    minLength={8}
                                />
                                {errors.password && <div className="error-message">{errors.password}</div>}
                            </div>
                            <div className="form-control">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.login.remember}
                                        onChange={(e) => handleInputChange(e, 'login', 'remember')}
                                    />
                                    <span>Remember me</span>
                                </label>
                            </div>
                            <button type="submit" className="submit-btn">Login</button>
                        </form>
                    </div>
                )}

                {activeForm === 'register' && (
                    <div className="input-group register">
                        <form onSubmit={(e) => handleSubmit(e, 'register')}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Username"
                                    value={formData.register.username}
                                    onChange={(e) => handleInputChange(e, 'register', 'username')}
                                    required
                                />
                                {errors.username && <div className="error-message">{errors.username}</div>}
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    className="input-field"
                                    placeholder="Email"
                                    value={formData.register.email}
                                    onChange={(e) => handleInputChange(e, 'register', 'email')}
                                    required
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Password"
                                    value={formData.register.password}
                                    onChange={(e) => handleInputChange(e, 'register', 'password')}
                                    required
                                    minLength={8}
                                />
                                {errors.password && <div className="error-message">{errors.password}</div>}
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Confirm Password"
                                    value={formData.register.confirmPassword}
                                    onChange={(e) => handleInputChange(e, 'register', 'confirmPassword')}
                                    required
                                    minLength={8}
                                />
                                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                            </div>
                            <div className="form-control">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={formData.register.terms}
                                        onChange={(e) => handleInputChange(e, 'register', 'terms')}
                                        required
                                    />
                                    <span>I agree to the Terms and Conditions</span>
                                </label>
                            </div>
                            <button type="submit" className="submit-btn">Register</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginRegisterForm;
