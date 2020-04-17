import React, { Component } from "react";

import "./App.css";
import AnimalList from "./AnimalList";
import AddAnimal from "./AddAnimal";
import EditAnimal from "./EditAnimal";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdVal: 4,
    tempId: null,
    tempAnimalName: "",
    tempHabitat: "",
    animalData: [
      { id: 1, animalName: "Armadillo", habitat: "desert" },
      { id: 2, animalName: "Iguana", habitat: "coastline" },
      { id: 3, animalName: "Lemur", habitat: "rainforest" },
    ],
  };

  handleEditChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeEditWindow = (e) => {
    e.preventDefault();
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempAnimalName: "",
      tempHabitat: "",
    });
  };

  addAnimal = (e) => {
    e.preventDefault();
    console.log("...addAnimal");
    const newAnimal = {
      id: this.state.runningIdVal,
      animalName: this.state.tempAnimalName,
      habitat: this.state.tempHabitat,
    };

    this.setState({
      runningIdVal: this.state.runningIdVal + 1,
      tempAnimalName: "",
      tempHabitat: "",
      animalData: [...this.state.animalData, newAnimal],
    });
  };

  deleteAnimal = (id) => {
    console.log(`...deleteAnimal ${id}`);
    this.setState({
      animalData: this.state.animalData.filter((animal) => animal.id !== id),
    });
  };

  editAnimal = (animal) => {
    console.log(
      `...editAnimal: ${animal.id} ${animal.animalName} ${animal.habitat}`
    );
    this.setState({
      editPanelOpen: true,
      tempId: animal.id,
      tempAnimalName: animal.animalName,
      tempHabitat: animal.habitat,
    });
  };

  updateAnimal = (e) => {
    e.preventDefault();
    console.log("...updateAnimal");
    const updatedAnimal = {
      id: this.state.tempId,
      animalName: this.state.tempAnimalName,
      habitat: this.state.tempHabitat,
    };
    console.log(updatedAnimal);

    const updatedAnimalData = this.state.animalData.map((animal) =>
      animal.id === updatedAnimal.id ? updatedAnimal : animal
    );
    console.log(updatedAnimalData);

    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempAnimalName: "",
      tempHabitat: "",
      animalData: updatedAnimalData,
    });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>APP</h1>
        <AnimalList
          animalData={this.state.animalData}
          editAnimal={this.editAnimal}
          deleteAnimal={this.deleteAnimal}
        />
        {this.state.editPanelOpen ? (
          <EditAnimal
            updateAnimal={this.updateAnimal}
            closeEditWindow={this.closeEditWindow}
            handleEditChange={this.handleEditChange}
            tempId={this.state.tempId}
            tempAnimalName={this.state.tempAnimalName}
            tempHabitat={this.state.tempHabitat}
          />
        ) : (
          <AddAnimal
            addAnimal={this.addAnimal}
            handleEditChange={this.handleEditChange}
            tempAnimalName={this.state.tempAnimalName}
            tempHabitat={this.state.tempHabitat}
          />
        )}
      </div>
    );
  }
}

export default App;
