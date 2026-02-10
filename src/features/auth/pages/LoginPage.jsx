import React from 'react';
import '../../../styles/login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/Providers/authContext';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const isEmptyEmail = () => {
    if (!email.trim()) return 'Email is required';
    if (!email.includes('@')) return 'Email is not valid';
    return '';
  };
  const isEmptyPassword = () => {
    if (!password.trim()) return 'Password is required';
    if (password.trim().length < 6) return 'the password is too short';

    return '';
  };
  const errorPassword = isEmptyPassword(password);
  const errorEmail = isEmptyEmail(email);

  const isValidForm = !errorPassword && !errorEmail;

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm) return;

    setLoading(true);
    login();
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard', { replace: true });
    }, 1500);
  };

  return (
    <>
      <div className="login-container">
        <h1>It 's a pleasure see you here</h1>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="login-email-container">
            <label htmlFor="email">
              Email
            </label>
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
            
            {emailTouched && errorEmail && <p>{errorEmail}</p>}
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
              placeholder="Your Password"
            />

            {passwordTouched && errorPassword && <p>{errorPassword}</p>}
          </div>
          <div className="action-container">
            <button className="enjoy-btn" disabled={loading || !isValidForm}>
              {loading ? 'wait' : 'Enjoy it'}
            </button>
          </div>
          <div className="check-information-container">
            <Link id="link-forgor-password" to={'/forgotPassword'}>
              Did you forgor your password?
            </Link>
            <p>Haven't you account yet?</p>

            <Link id="link-registry" to={'/register'}>
              Subscribe Now
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
