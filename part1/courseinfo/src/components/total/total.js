const Total = (prop) => (
  <p>
    Number of exercises{" "}
    {prop.exercises.reduce((partialSum, a) => partialSum + a, 0)}
  </p>
);

export default Total;
