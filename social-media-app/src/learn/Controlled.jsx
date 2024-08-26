import React, { useState } from 'react';

function Form() {
    // Use useState to manage the state of the input field
    const [inputValue, setInputValue] = useState('');

    // Function to handle changes to the input field
    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
}
