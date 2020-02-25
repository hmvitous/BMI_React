import React from "react";

const Form = props => {

  const weightPlaceholder = props.method == "metric" ? "Weight in kgs" : "Weight in lbs"
  const heightPlaceholder = props.method == "metric" ? "Height in cm" : "Height in ft"

  return (
    <form onSubmit={props.onSubmitHandler}>
      <select name="method" id="select-method"
        onChange={props.onChangeHandler}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={weightPlaceholder}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder={heightPlaceholder}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;