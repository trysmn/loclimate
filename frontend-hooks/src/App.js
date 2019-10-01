import React, {useState} from 'react';
import Container from "./Container/Container";
import DataContextProvider from "./Container/contexts/DataContext";

function App() {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  return (
    <div className="App">
        <DataContextProvider isSubmitClicked={isSubmitClicked}>
            <Container isSubmitClicked={isSubmitClicked} setIsSubmitClicked={setIsSubmitClicked} />
        </DataContextProvider>
    </div>
  );
}

export default App;
