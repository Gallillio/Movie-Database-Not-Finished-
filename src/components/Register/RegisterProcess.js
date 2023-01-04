import React, { useState } from 'react';

function RegisterProcess() {
  // Use the useState hook to create state variables for the form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  // Create a function to handle form submissions
  const handleSubmit = event => {
    event.preventDefault();

    // Validate the form fields
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear the error message
    setError(null);

    // Send the form data to the server or perform other actions
  };

  return (
    <div className="container">
      <h1>Create an account</h1>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create account</button>
      </form>
    </div>
  );
}

export default RegisterProcess;