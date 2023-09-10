import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list-component/card-list-componenent";
import SearchHandle from "./components/search-field-component/search-field-component";

function App() {
  const [inText, setInText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("RENDER");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const NewfilteredMonsters = monsters.filter((mon) => {
      return mon.name.toLowerCase().includes(inText.toLowerCase());
    });
    setFilteredMonsters(NewfilteredMonsters);
  }, [monsters, inText]);

  const onSearchChange = (event) => {
    const newValue = event.target.value;
    setInText(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Monsters</h1>
        <SearchHandle
          className={"search"}
          onSearchChange={onSearchChange}
          placeholder="Search Monsters"
        />
      </header>
      <main className="container">
        <CardList monsters={filteredMonsters} />
      </main>
    </div>
  );
}

export default App;
