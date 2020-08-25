import React from 'react'
import Proptypes from 'prop-types'


export function Field({ name, children, type = 'text', className, error, ...props }) {
    return <div className={`form-group ${className}`}>
        {children && <label htmlFor={name}>{children}</label>}
        <input type={type} name={name} id={name} className={`form-control${error ? ' is-invalid' : ''}`}{...props} />
        {error && <div className="invalid-feedback">{error}</div>}
    </div>

}

Field.propTypes = {
    name: Proptypes.string,
    children: Proptypes.node,
    type: Proptypes.string,
    error: Proptypes.string,
    className: Proptypes.string
}
