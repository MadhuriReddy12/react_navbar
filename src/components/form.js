// components/Form.js

import React, { useState } from "react";
import "./form.js";

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [message, setMessage] = useState(null);

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (input1.trim() === "" || input2.trim() === "" || input3.trim() === "" || input4.trim() === "") {
      setMessage("Please fill in all textboxes");
      return;
    }

    // Send data to the server or perform further actions
    // For demonstration, let's set a success message
    setMessage("Form submitted successfully!");

    // Clear the form after submission
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
  };

  const handleClear = () => {
    // Clear all input fields
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    // Clear any feedback message
    setMessage(null);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input1}
        onChange={(e) => handleInputChange(e, setInput1)}
        placeholder="Textbox 1"
        className="textbox"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => handleInputChange(e, setInput2)}
        placeholder="Textbox 2"
        className="textbox"
      />
      <input
        type="text"
        value={input3}
        onChange={(e) => handleInputChange(e, setInput3)}
        placeholder="Textbox 3"
        className="textbox"
      />
      <input
        type="text"
        value={input4}
        onChange={(e) => handleInputChange(e, setInput4)}
        placeholder="Textbox 4"
        className="textbox"
      />
      <div className="button-container">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>

      {message && <p className={message.includes("success") ? "success-message" : "error-message"}>{message}</p>}
    </form>
  );
};

export default Form;
