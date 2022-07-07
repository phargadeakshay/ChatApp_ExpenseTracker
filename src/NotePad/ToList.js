import React, { useState } from "react";

export const ToList = () => {
  const [inputedata, setInputedata] = useState({
    firstName: "",
    lastName: "",
  });

  const [items, setItems] = useState([]);

  const inputHandlar = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputedata({ ...inputedata, [name]: value });
  };
  const addItem = () => {
    const newObje = { ...inputedata, id: new Date().getTime().toString() };
    if (!(inputedata.lastName && inputedata.firstName)) {
    } else {
      setItems([...items, newObje]);
      console.log(items);
      setInputedata({
        firstName: "",
        lastName: "",
      });
    }
  };
  const DeleteData = (id) => {
    const UpdateData = items.filter((itemmmm) => {
      return itemmmm.id !== id;
    });
    console.log("DeleteData Called");
    setItems(UpdateData);
  };
  return (
    <div>
      <div className="formm">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          // value={inputedata.firstName}
          name="firstName"
          className="in1 border-2 border-black"
          id="fname"
          value={inputedata.firstName}
          onChange={inputHandlar}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          // value={inputedata.firstName}
          name="lastName"
          className="in1 border-2 border-black"
          id="lname"
          value={inputedata.lastName}
          onChange={inputHandlar}
        />
        <button className="btn" onClick={addItem}>
          Submit
        </button>

        {items.map((elem) => {
          const { firstName, lastName, id } = elem; /* array distructuring*/
          return (
            <div key={id}>
              <h3>
                {firstName} {lastName}
              </h3>
              {/* <h3>{lastName}</h3> */}
              <button onClick={() => DeleteData(id)}>Delete </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToList;
