const Persons = ({ personsToShow, deletePerson }) => {
  return personsToShow.map((person) => (
    <div key={person.id}>
      {person.name} {person.number}
      <button onClick={() => deletePerson(person)}>delete me</button>
    </div>
  ));
};

export default Persons;
