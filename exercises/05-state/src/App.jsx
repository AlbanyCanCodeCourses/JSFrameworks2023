import "./App.css";
// Import LessText here
// import LessText from "./components/LessText/LessText";
// Import CharacterCount here
// import CharacterCount from "./components/CharacterCount/CharacterCount";
import GuessingTheNumber from "./components/GuessTheNumber/GuessTheNumber";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        {/* Add LessText with props here */}
        {/* <LessText text={"hello"} maxLength={1} /> */}
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
          {/* <CharacterCount /> */}
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        {/* Add GuessingTheNumber here */}
        <GuessingTheNumber />
      </div>
    </>
  );
}

export default App;
