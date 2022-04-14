import "./App.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Container from "./components/Container";

import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./store/userDataSlice";
import { setDateSplitData } from "./store/dateSplitDataSlice";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.value);
  const dateSplitData = useSelector((state) => state.userData.value);
  const themeData = useSelector((state) => state.themeData.value);

  const [user, setUser] = useState("octocat");

  // const [theme, setTheme] = useState("");

  const userRef = useRef();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user}`
        );
        dispatch(setUserData(response.data));
        dispatch(
          setDateSplitData(
            response.data.created_at.split("T").shift().split("-")
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [userData, dispatch]);

  // const changeTheme = () => {
  //   if (theme === "") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("");
  //   }
  // };

  return (
    <div className={`App ${themeData}`}>
      <Container
        setUser={setUser}
        // changeTheme={changeTheme}
        userRef={userRef}
      />
    </div>
  );
}

export default App;
