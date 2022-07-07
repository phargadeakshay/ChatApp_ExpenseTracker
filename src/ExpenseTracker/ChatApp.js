import React, { useState } from "react";
import classnames from "classnames";

const MessageForm = ({ handleSubmit, user }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex items-center"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event, user, message);
        setMessage("");
      }}
    >
      <input
        type="text"
        className="p-2 grow border border-gray-500 rounded shadow"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" className="ml-2 p-2 bg-green-400 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rotate-90 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </form>
  );
};

const ChatApp = () => {
  const A = "A";
  const B = "B";
  const C = "C";
  const D = "D";
  const users = [A, B, C, D];
  const [messages, setMessages] = useState([
    {
      user: B,
      text: "Hey!!",
    },
    {
      user: A,
      text: "Hello",
    },
    {
      user: B,
      text: "How are you?",
    },
  ]);

  const handleSubmit = (event, user, text) => {
    event.preventDefault();

    setMessages([
      ...messages,
      {
        user,
        text,
      },
    ]);
  };

  return (
    <div className="container mx-auto mt-12 flex justify-between">
      {users.map((user) => (
        <div>
          <p>User {user}</p>
          <div
            style={{ width: "375px", height: "600px" }}
            className="border border-gray-300 bg-gray-100 overflow-y-auto"
          >
            <div className="h-full flex flex-col">
              <div className="pb-2 grow flex flex-wrap items-end">
                <div className="w-full">
                  {messages.map((message) => (
                    <div
                      className={classnames("px-3 py-1 flex w-full", {
                        "justify-start": message.user !== user,
                        "justify-end": message.user === user,
                      })}
                    >
                      <div
                        className={classnames("px-4 py-2 rounded", {
                          "bg-white": message.user !== user,
                          "bg-green-200": message.user === user,
                        })}
                      >
                        <p className="text-sm font-semibold">{message.user}</p>
                        <p className="text-base">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <MessageForm handleSubmit={handleSubmit} user={user} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatApp;
