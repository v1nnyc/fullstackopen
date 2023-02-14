const Total = (prop) => (
  <p>
    Number of exercises{" "}
    {prop.parts.reduce((acc, cur) => acc + cur.exercises, 0)}
  </p>
);

export default Total;
