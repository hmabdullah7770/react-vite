import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  
  return (
    <div className="mb-2">
      {label && (
        <label 
          htmlFor={props.id || props.name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 
          focus:outline-none focus:ring-blue-500 focus:border-blue-500
          ${hasError ? 'border-red-500' : 'border-gray-300'}
        `}
        {...field}
        {...props}
      />
      {hasError && (
        <p className="mt-1 text-xs text-red-600">{meta.error}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputField;
