import {FC} from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";

const App: FC = () => {
  return <>
  <Person name="Kamal" age={28} email="kamal@gmail.com" hairColor={HairColor.pink} />
  </>;
}

export default App;
