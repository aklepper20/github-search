import "./App.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Container from "./components/Container";

import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  const [user, setUser] = useState("octocat");

  const [dateSplit, setDateSplit] = useState("2011-01-25T18:44:36Z");
  const [theme, setTheme] = useState("");

  const userRef = useRef();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user}`
        );
        dispatch(setUserData(response.data));
        setDateSplit(response.data.created_at.split("T").shift().split("-"));
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [user, dispatch]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const changeTheme = () => {
    if (theme === "") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };

  return (
    <div className={`App ${theme}`}>
      <Container
        setUser={setUser}
        changeTheme={changeTheme}
        userRef={userRef}
        dateSplit={dateSplit}
        months={months}
      />
    </div>
  );
}

export default App;
