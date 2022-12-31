import React from 'react';

const InputField = (props) => {
    const { value, label, placeholder, type, onChange, name } = props;

    return (
        <div className="form-group">
            {label && (
                <label className="form-label" htmlFor="input-field">
                    {label}
                </label>
            )}

            <input
                type={type}
                value={value}
                className="form-control"
                placeholder={placeholder}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default InputField;
