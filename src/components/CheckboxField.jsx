import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const CheckboxField = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const hasError = meta.touched && meta.error;
  
  return (
    <div className="flex items-start mb-4">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500
            ${hasError ? 'border-red-500' : ''}
          `}
          {...field}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={props.id || props.name} className="text-gray-700">
          {children}
        </label>
        {hasError && (
          <p className="mt-1 text-sm text-red-600">{meta.error}</p>
        )}
      </div>
    </div>
  );
};

CheckboxField.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckboxField;
