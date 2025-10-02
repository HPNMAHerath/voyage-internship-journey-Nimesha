import React, { useState } from 'react';
import '../Styles/FormValidation.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      return 'Password must contain at least one uppercase and one lowercase letter';
    }
    return '';
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    newErrors.confirmPassword = validateConfirmPassword(formData.confirmPassword, formData.password);

    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) {
        delete newErrors[key];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid for submit button state
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.password &&
      formData.confirmPassword &&
      !validateName(formData.name) &&
      !validateEmail(formData.email) &&
      !validatePassword(formData.password) &&
      !validateConfirmPassword(formData.confirmPassword, formData.password)
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      console.log('Form submitted successfully:', formData);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="form-validation-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Fill in the details below to register</p>
          </div>

          {submitSuccess && (
            <div className="success-message">
              <div className="success-content">
                <svg className="success-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Registration successful! Welcome aboard.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`form-input ${errors.name ? 'error' : ''}`}
              />
              {errors.name && (
                <p className="error-message">{errors.name}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`form-input ${errors.password ? 'error' : ''}`}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="button-group">
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`submit-btn ${isFormValid() && !isSubmitting ? 'active' : 'disabled'}`}
              >
                {isSubmitting ? (
                  <span className="loading-content">
                    <svg className="loading-spinner" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="reset-btn"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="form-footer">
            <p>
              Already have an account?{' '}
              <span className="link">Sign in here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;