import React, { useEffect, useState } from "react";
import "./App.css";
// import Monsters from "./components/card-list-component/card-list-componenent";
// import SearchHandle from "./components/search-field-component/search-field-component";

function App() {
  console.log("RENDERING");
  const [inText, setInText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [NewfilteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  useEffect(() => {
    const NewfilteredMonsters = monsters.filter((mon) => {
      return mon.name.toLowerCase().includes(inText.toLowerCase());
    });
    setFilteredMonsters(NewfilteredMonsters);
  }, [monsters, inText]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Monsters</h1>
        <SearchHandle
          inText={inText}
          setInText={setInText}
          placeholder="Search Monsters"
        />
      </header>
      <main className="container">
        <div>
          <Monsters monsters={NewfilteredMonsters} />
        </div>
      </main>
    </div>
  );
}

function Monsters({ monsters }) {
  // const [id, name, email] = monsters;
  return (
    <div className="card-list">
      {monsters.map((mon) => (
        <div key={mon.id} className="card-container">
          <img
            alt={`monster ${mon.id}`}
            src={`https://robohash.org/${mon.id}/?set=set2&size=180x180`}
          />
          <h3>{mon.name}</h3>
          <p>{mon.email}</p>
        </div>
      ))}
    </div>
  );
}

function SearchHandle({ inText, setInText, placeholder }) {
  function handleInputChange(event) {
    const newValue = event.target.value;
    setInText(newValue);
  }

  return (
    <input
      className="search"
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
}

export default App;
