import React from 'react';

const FormInput = (props) => {
  const { name, type, label, value, onChange, error, ...inputProps } = props;

  const inputStyle = {
    borderColor: error ? '#FF6347' : '', // Change border color to red if there's an error
    boxShadow: error ? '0 0 0 0.25rem rgba(255, 99, 71, 0.25)' : '',
  };

  return (
    <div className="form-group mb-2 p-2">
      <label htmlFor={name} className="small">
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        style={inputStyle}
        {...inputProps}
      />
      {error && <p className="text-danger small px-2">{error}</p>}
    </div>
  );
};

export default FormInput;
