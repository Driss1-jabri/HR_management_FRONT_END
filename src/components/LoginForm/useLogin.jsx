import { useEffect, useState } from "react";

const credentials = {
  email: "",
  password: "",
};

const useLogin = () => {
  const [userCredentials, setUserCredentials] = useState(credentials);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userCredentials.email || !userCredentials.password) {
      console.log("error");
      // make the error
      return;
    }
  };

  return { handleChange, handleSubmit, userCredentials };
};

export default useLogin;
