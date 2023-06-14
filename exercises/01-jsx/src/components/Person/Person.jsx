const Person = () => {
  const person = {
    name: "Peter Piper",
    birthYear: 1940,
    occupation: "Musician",
    age() {
      let currentYear = new Date(Date.now()).getFullYear();
      return currentYear - person.birthYear;
    },
  };

  /**
   * Create a function that get's Peter Piper's age from his birth year.
   * You can get today's year with:
   * @example new Date(Date.now()).getFullYear()
   * 
   */

  const getAge = (birthYear) => {
    const year = new Date(Date.now()).getFullYear();
    return year - birthYear;
  };

  return (
    <div>
      <h1>Featured Person</h1>
      {/* Using JSX, plugin name below from the person object */}
      <div>Name: {person.name}</div>
      {/* Using JSX, plugin occupation below from the person object */}
<<<<<<< HEAD
      <div>Occupation: {person.occupation}</div>
      {/* Using JSX, plugin the birth year using a function that converts age to birth year */}
      <div>Age: {getAge(person.birthYear)}</div>
=======
      <div>Occupation: {person.occupation} </div>
      {/* Using JSX, plugin the birth year using a function that converts age to birth year */}
      <div>Age: {person.age()}</div>
>>>>>>> 94a6bad2eeec12d558add2b2607981eed1deb495
    </div>
  );
};

export default Person;
