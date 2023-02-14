import Part from "./part/part";

const Content = (prop) => {
  return (
    <>
      {prop.parts.map((part, i) => {
        return (
          <Part key={part.id} part={part.name} exercise={part.exercises}></Part>
        );
      })}
    </>
  );
};

export default Content;
