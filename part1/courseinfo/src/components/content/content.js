import Part from "./part/part";

const Content = (prop) => {
  return (
    <>
      <Part part={prop.parts[0]} exercise={prop.exercises[0]} />
      <Part part={prop.parts[1]} exercise={prop.exercises[1]} />
      <Part part={prop.parts[2]} exercise={prop.exercises[2]} />
    </>
  );
};

export default Content;
