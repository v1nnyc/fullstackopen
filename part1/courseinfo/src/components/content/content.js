import Part from "./part/part";

const Content = (prop) => {
  return (
    <>
      <Part part={prop.parts[0].name} exercise={prop.parts[0].exercise} />
      <Part part={prop.parts[1].name} exercise={prop.parts[1].exercise} />
      <Part part={prop.parts[2].name} exercise={prop.parts[2].exercise} />
    </>
  );
};

export default Content;
