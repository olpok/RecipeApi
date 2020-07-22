import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from './Loader'

export function Button({ children, type = 'primary', loading = false, ...props }) {
    let className = 'btn btn-' + type
    let htmlType = null
    if (type === 'submit') {
        htmlType = 'submit'
        className = 'btn btn-primary'
    }
    return <button className={className} type={htmlType} disabled={loading} {...props}>
        {loading ? <> <Loader size='sm' /> Chargement... </> : children}
    </button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    loading: PropTypes.bool
}