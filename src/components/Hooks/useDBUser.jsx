import { useEffect, useState } from "react";

const useDBUser = () => {
    const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
    return userData;
};

export default useDBUser;