import React from 'react';
import { Link } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputField from '../components/InputField';
import CheckboxField from '../components/CheckboxField';
import Button from '../components/Button';
import Logo from '../components/Logo';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    // Here you would normally send data to your API
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <div className="mb-8 md:hidden flex justify-center">
        <Logo />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
      <p className="text-gray-600 mb-6">
        Login to your account. Thank you for getting back to Lottery Display, let's access our the best recommendation for you.
      </p>
      
      <Formik
        initialValues={{
          username: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField 
              label="Username" 
              name="username" 
              type="text" 
              placeholder="Email or Phone Number" 
            />
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="#" className="text-sm text-blue-600 hover:underline">
                  Reset Password?
                </Link>
              </div>
              <InputField 
                name="password" 
                type="password" 
                placeholder="Password" 
              />
            </div>
            
            <CheckboxField name="rememberMe">
              Remember me
            </CheckboxField>
            
            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Sign In
            </Button>
            
            <div className="text-center mt-6">
              Don't have an account yet? <Link to="/register" className="text-blue-600 hover:underline">Join Lottery Display</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
