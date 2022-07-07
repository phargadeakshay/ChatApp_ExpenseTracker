import React, { useEffect, useMemo, useState } from "react";
import { render } from "react-dom";

const Tracker = () => {
  const A = "A";
  const B = "B";
  const C = "C";
  const D = "D";
  const E = "E";

  const users = [A, B, C, D, E];
  const [expenses, setExpenses] = useState([
    {
      user: B,
      value: 50,
    },
    {
      user: A,
      value: 50,
    },
  ]);

  const breakdowns = useMemo(() => {
    return expenses.map((expense) => {
      return users.map((user) => {
        if (user === expense.user) {
          return expense.value * ((users.length - 1) / users.length);
        } else {
          return (expense.value / users.length) * -1;
        }
      });
    });
  }, [expenses]);

  const total = useMemo(() => {
    return expenses.reduce((totalValue, expense) => {
      return totalValue + expense.value;
    }, 0);
  }, [expenses]);

  const userTotals = useMemo(() => {
    return users.map((user, index) => {
      return breakdowns.reduce((total, breakdown) => {
        return total + breakdown[index];
      }, 0);
    });
  }, [breakdowns, users]);

  const initialUser = users[0];
  const initialAmount = 0;
  const [user, setUser] = useState(initialUser);
  const [amount, setAmount] = useState(initialAmount);

  const addExpense = (event) => {
    event.preventDefault();

    setExpenses([
      ...expenses,
      {
        user: user,
        value: amount,
      },
    ]);

    setUser(initialUser);
    setAmount(initialAmount);
  };

  return (
    <div className="container mx-auto" style={{ width: "600px" }}>
      <form className="flex" onSubmit={addExpense}>
        <p>User</p>
        <select
          className="ml-2"
          onChange={(event) => setUser(event.target.value)}
        >
          {users.map((currentUser) => (
            <option value={currentUser} selected={currentUser === user}>
              {currentUser}
            </option>
          ))}
        </select>
        <p className="ml-6">Amount</p>
        <input
          type="number"
          className="ml-2 border"
          value={amount}
          onChange={(event) => setAmount(parseInt(event.target.value))}
        />
        <button type="submit" className="ml-6">
          Submit
        </button>
      </form>
      <table className="w-full">
        <tr>
          <th>Expenses</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
        </tr>
        {expenses.map((expense, index) => (
          <tr>
            <td className="text-center">
              {expense.user} - {expense.value}
            </td>
            {breakdowns[index].map((value) => (
              <td className="text-center">{value}</td>
            ))}
          </tr>
        ))}
        <tr>
          <td className="text-center">Total - {total}</td>
          {userTotals.map((value) => (
            <td className="text-center">{value}</td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Tracker;
