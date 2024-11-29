import React from 'react';

export const LoginForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter Your email" />
        
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
