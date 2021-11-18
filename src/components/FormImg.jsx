import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          {" "}
          Buscar: <input className="w-100" type="text" name="inputText" />{" "}
        </label>
        <button type="submit" className="btn btn-primary m-2" >
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
