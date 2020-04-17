import React from "react";

const AnimalList = (props) => {
  const animalTable = props.animalData.map((animal) => (
    <tr key={`ANIM_${animal.id}`}>
      <td>{animal.id}</td>
      <td>{animal.animalName}</td>
      <td>{animal.habitat}</td>
      <td>
        <button onClick={() => props.editAnimal(animal)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteAnimal(animal.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h1>Animal List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Habitat</th>
          </tr>
        </thead>
        <tbody>{animalTable}</tbody>
      </table>
    </div>
  );
};

export default AnimalList;
