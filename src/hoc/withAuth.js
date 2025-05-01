import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    // Here you can add authentication logic
    // For example, checking if a user is logged in
    const isAuthenticated = localStorage.getItem('token') !== null;
    
    // You could redirect if not authenticated
    // Or pass the auth status as a prop
    
    return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
  };
};

export default withAuth;