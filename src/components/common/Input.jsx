import React from 'react';

const Input = (props) => {
  const { name, onChange, value, error, label  } = props;
  return (
    <div className="form-group">
      <label htmlFor={name} > {label} </label>
      <input 
        autoFocus
        value={value}
        name={name}
        onChange={onChange}
        type="text" 
        className="form-control" 
        id={name}
      />
      {error && <div className="alert alert-danger" >{error}</div>}
    </div>
  );
};

export default Input;