import {FC, createContext} from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}
const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Kamal",
    age:21,
    country: "India"
  }
  return (
    <>
      <AppContext.Provider value={contextValue}>
        <Person
          name="Kamal"
          age={28}
          email="kamal@gmail.com"
          hairColor={HairColor.pink}
        />
      </AppContext.Provider>
    </>
  );
}

export default App;
