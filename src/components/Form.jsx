import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRegEdit,
  FaBuilding,
} from "react-icons/fa"; // Importing icons

const Form = ({
  name,
  value,
  type,
  placeholder,
  className,
  errorResponse,
  onChange,
}) => {
  const [hasError, setHasError] = useState(null);

  // Define validation patterns
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    number: /^[0-9]{10}$/,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const target = { target: { name, value } };

    // Email validation
    if (type === "email" && !patterns.email.test(value)) {
      setHasError(errorResponse);
    } else if (type === "email" && patterns.email.test(value)) {
      setHasError(null); // Clear error when valid
    }

    // Number validation (only allow 10 digits)
    if (type === "number" && !patterns.number.test(value)) {
      setHasError(errorResponse);
    } else if (type === "number" && patterns.number.test(value)) {
      setHasError(null); // Clear error when valid
    }

    // Call onChange prop with target object
    if ((type !== "email" && type !== "number") || !hasError) {
      onChange(target);
    }
  };

  const renderInput = () => (
    <div className="relative border-b-2 border-gray-400 hover:border-black transition duration-200">
      {type === "email" && (
        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black transition duration-300" />
      )}
      {type === "number" && (
        <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black transition duration-300" />
      )}
      {type === "text" && name === "name" && (
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black transition duration-300" />
      )}
      {type === "text" && name === "company" && (
        <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black transition duration-300" />
      )}
      {type === "textarea" && (
        <FaRegEdit className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black transition duration-300" />
      )}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={`p-4 pl-12 font-light text-lg text-theme-blue rounded focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 ${className}`}
        onChange={handleChange}
        required
      />
    </div>
  );

  const renderError = () =>
    hasError && (
      <span className="text-sm text-white bg-red-500 p-1 rounded mt-2 animate-pulse">
        {hasError}
      </span>
    );

  if (type === "textarea") {
    return (
      <div className="flex flex-col mb-6 mx-2 lg:mx-5">
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          className={`w-full sm:w-192 lg:w-192.5 xl:w-192.5 p-4 mx-2 mb-6 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 ${className}`}
          onChange={handleChange}
          rows="9"
          required
        />
        {renderError()}
      </div>
    );
  }

  if (type === "number") {
    return (
      <div className="flex flex-col mb-6 mx-2 lg:mx-5">
        {renderInput()}
        {renderError()}
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-6 mx-2 lg:mx-5">
      {renderInput()}
      {renderError()}
    </div>
  );
};

Form.defaultProps = {
  errorResponse: "Please match the requested format.",
  type: "text",
  placeholder: "",
  className: "",
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorResponse: PropTypes.string,
};

export default Form;
