import React from "react";
import axios from "axios";

function Form() {
  const handleSubmit = async (user, pwd) => {
    try {
      await axios
        .post(
          "http://localhost:4000/api/register",
          {
            userName: user.toLowerCase(),
            password: pwd,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.status);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return <form onSubmit={handleSubmit}></form>;
}

export default Form;
