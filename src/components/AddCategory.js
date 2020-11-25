import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setIputValue] = useState('');

    const handleInputChange = (e) => {
        setIputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setIputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="Text"
                value={inputValue}
                onChange={handleInputChange} />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
