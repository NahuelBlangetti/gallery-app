import React from 'react'
import PropTypes from 'prop-types'

const Formimg = ({handleSubmit}) => {
    return (
        <>
            <form onSubmit={handleSubmit} className="mt-4">
                <label className="w-75">
                    <input className="w-100" type="text" name="inputText"/>{" "}
                </label>
                
                <button className="btn btn-warning m-2">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </>
    )
}
Formimg.propTypes = {
    handleSubmit: PropTypes.func
}

export default Formimg