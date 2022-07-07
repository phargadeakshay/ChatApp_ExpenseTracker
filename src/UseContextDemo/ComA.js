import React, { createContext } from "react";
import { ComB } from "./ComB";
const BioData = createContext();
export const ComA = () => {
  return (
    <BioData.Provider
      // value={("Akshay Phargade", { Name: "akshay", lname: "phargade" })}
      value={{ Name: "akshay", lname: "phargade", age: 28 }}
    >
      <ComB />
    </BioData.Provider>
  );
};
export default ComA;
export { BioData };
