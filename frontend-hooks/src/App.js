import React, {useState} from 'react';
import NavBar from "./NavBar/NavBar";
import ViewHeader from "./ViewHeader/ViewHeader";
import DataView from "./DataView/DataView";

function App() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <ViewHeader isSubmitClicked={isSubmitClicked} setIsSubmitClicked={setIsSubmitClicked} />
      <DataView isSubmitClicked={isSubmitClicked} />
    </div>
  );
}

export default App;
