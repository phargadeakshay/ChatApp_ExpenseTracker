import React, { useContext } from "react";
import { BioData } from "./ComA";
// Prop Drilling se bachane ke liy useContext Hooks ka use kiya jata hia
export const ComC = () => {
  const akData = useContext(BioData);
  return (
    <h1>
      Hello {akData.Name} and your Last Name is {akData.lname} age is
      {akData.age}
    </h1>
  );
};
export default ComC;
