import React from "react";

const EditAnimal = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Animal</h2>
      <form className="h-form" onSubmit={props.updateAnimal}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="tempAnimalName"
          value={props.tempAnimalName}
          onChange={props.handleEditChange}
        />
        <label className="h-label">Habitat</label>
        <input
          className="h-input"
          type="text"
          name="tempHabitat"
          value={props.tempHabitat}
          onChange={props.handleEditChange}
        />
        <br />
        <button>Submit</button>
        <button onClick={props.closeEditWindow}>Cancel</button>
      </form>
    </div>
  );
};

export default EditAnimal;
