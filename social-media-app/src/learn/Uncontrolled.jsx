import React from 'react';

function Form() {
    // Use a ref to manage the state of the input field
    const inputRef = React.useRef();

    // Function to handle the form submission
    function handleSubmit(event){
        event.preventDefault();

        // Do something with the input value here
        // For example, you might send the input value to an
        // API or save it the database
        sendInputValue(inputRef.current.value);

        // Clear the input after submitting
        inputRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            id="name"
            defaultValue=""
            ref={inputRef}
        />
        </form>
    );
}
