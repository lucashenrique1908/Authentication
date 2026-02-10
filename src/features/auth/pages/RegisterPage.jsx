import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/register.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [nameTouched, setNamedTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const validateForm = ({ name, email, password, confirmPassword }) => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!email.includes('@')) {
      errors.email = 'Email is not valid';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password is too short';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  }

 const errors = validateForm({
   name,
   email,
   password,
   confirmPassword,
 });


  const isValidForm = Object.keys(errors).length === 0;


  const handleSubmit = (e) => {
    e.preventDefault();

    setNamedTouched(true);
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);

    if (!isValidForm) return;

    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };
  return (
    <div>
      <h1>Register Now</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <Link to={'/login'} id="back-to-login">
          Back
        </Link>
        <div className="login-Name-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              setNamedTouched(true);
            }}
          />
          {nameTouched && errors.name && <p>{errors.name}</p>}
        </div>
        <div className="login-email-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              setEmailTouched(true);
            }}
          />
          {emailTouched && errors.email && <p>{errors.email}</p>}
        </div>
        <div className="login-senha-container">
          <label htmlFor="senha">Password</label>
          <input
            type="password"
            name="senha"
            id="senha"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordTouched(true);
            }}
            placeholder="Your password"
          />
          {passwordTouched && errors.password && <p>{errors.password}</p>}
          <label htmlFor="confirmPassword">confirm your password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordTouched(true);
            }}
            placeholder="Confirm Your password"
          />

          {confirmPasswordTouched && errors.confirmPassword && (
            <p>{errors.confirmPassword}</p>
          )}
        </div>
        <div className="action-container">
        <button className="enjoy-btn" desabled={loading || !isValidForm}>
            {loading ? 'wait' : 'Enjoy it'}
          
          </button>

             
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
