import React,{useState} from 'react';
import { Link } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import OtpInput from 'react-otp-input';

import InputField from '../components/InputField';
import CheckboxField from '../components/CheckboxField';
import Button from '../components/Button';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  acceptTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

const Signup = () => {
    const [otp, setOtp] = useState('');
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    // Here you would normally send data to your API
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-1">Signup</h2>
      <p className="text-gray-600 mb-2">
        Manage all your lottery efficiently. Let's get you all set up so you can verify your personal account and begin setting up your profile.
      </p>
      
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: '',
          receiveEmails: false,
          acceptTerms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField 
                  label="First Name" 
                  name="firstName" 
                  type="text" 
                  placeholder="Enter your first name" 
                />
                <InputField 
                  label="Last Name" 
                  name="lastName" 
                  type="text" 
                  placeholder="Enter your last name" 
                /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <InputField 
                label="Phone Number" 
                name="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
              />
               <InputField 
                label="Email" 
                name="email" 
                type="email" 
                placeholder="Enter your email address" 
              /></div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField 
                label="Password" 
                name="password" 
                type="password" 
                placeholder="Create a password" 
              />
              <InputField 
                label="Confirm Password" 
                name="confirmPassword" 
                type="password" 
                placeholder="Confirm your password" 
              />
              </div> 



              <div className="mb-4 mt-2 flex justify-center">
  <OtpInput
    value={otp}
    onChange={setOtp}
    numInputs={5}
    renderSeparator={<span className="mx-2 text-gray-500"> </span>}
    renderInput={(props) => (
        <input
        {...props}
        className="w-20 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
        // placeholder="•"
      />
    )}
  />
</div>
              <CheckboxField name="receiveEmails">
                Yes, I want to receive Lottery Display emails
              </CheckboxField>
              
              <CheckboxField name="acceptTerms">
                I agree to all the <Link to="#" className="text-blue-600 hover:underline">Term</Link>, <Link to="#" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link to="#" className="text-blue-600 hover:underline">Fees</Link>
              </CheckboxField>
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Create Account
              </Button>
              
              <div className="text-center mt-6">
                Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;