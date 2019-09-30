import React, {useState} from 'react';
import NavBar from "./NavBar/NavBar";
import ViewHeader from "./ViewHeader/ViewHeader";
import DataView from "./DataView/DataView";
import DataContextProvider from "./contexts/DataContext";

function App() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <DataContextProvider>
          <ViewHeader isSubmitClicked={isSubmitClicked} setIsSubmitClicked={setIsSubmitClicked} />
          <DataView isSubmitClicked={isSubmitClicked} />
      </DataContextProvider>
    </div>
  );
}

export default App;
