import React from 'react';

const FormInput = (props) => {
  const { name, type, label, value, onChange, error,options, ...inputProps } = props;

  const inputStyle = {
    borderColor: error ? '#FF6347' : '', // Change border color to red if there's an error
    boxShadow: error ? '0 0 0 0.25rem rgba(255, 99, 71, 0.25)' : '',
  };

  return (
    <div className="form-group mb-2 p-2">
      {type === 'select' ? (
        <div>
          <label htmlFor={name} className="small">
              {label}
          </label>
          <select
            className="form-select"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            style={inputStyle}
            {...inputProps}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : type === 'radio' ? (
        <div>
          {options.map((option, index) => (
            <div key={index} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id={`${name}_${index}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                style={inputStyle}
                {...inputProps}
              />
              <label className="form-check-label small" htmlFor={`${name}_${index}`}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ) : type === 'checkbox' ? (
        <div className="form-check ms-1">
          <input
            className="form-check-input border-success"
            type="checkbox"
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            style={inputStyle}
            {...inputProps}
          />
          <label className="form-check-label" htmlFor={name}>
            {label}
          </label>
        </div>
      ) :(
        <div>
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
        </div>
      )}
      {error && <p className="text-danger small px-2">{error}</p>}
    </div>
  );
};

export default FormInput;
