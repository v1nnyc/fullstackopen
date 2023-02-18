import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFitler] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    let nameExists = persons.some((obj) => obj.name === newName);

    if (nameExists) {
      updatePerson(newName);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      phonebookService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const updatePerson = (name) => {
    const personToUpate = persons.find((person) => person.name === name);

    const updatedPersonObject = {
      ...personToUpate,
      number: newNumber,
    };

    if (
      window.confirm(
        `${name} is already in phonebook, replace old number with a new one?`
      )
    ) {
      phonebookService
        .update(personToUpate.id, updatedPersonObject)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== personToUpate.id ? person : returnedPerson
            )
          );

          setNewName("");
          setNewNumber("");
        });
    }
  };

  const deletePerson = (person) => {
    let id = person.id;

    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService.del(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameFilterChange = (event) => {
    setNameFitler(event.target.value.toLowerCase());
  };

  const personsToShow = nameFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(nameFilter)
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
      ></Filter>
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      ></PersonForm>
      <h3>Numbers</h3>
      <Persons
        personsToShow={personsToShow}
        deletePerson={deletePerson}
      ></Persons>
    </div>
  );
};

export default App;
