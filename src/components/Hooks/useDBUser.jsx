import { useEffect, useState } from "react";

const useDBUser = () => {
    const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("-https://connecthub-1.netlify.app/api/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
    return userData;
};

export default useDBUser;