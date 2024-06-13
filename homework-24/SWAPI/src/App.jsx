
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content"


function App() {
  return (
    <div className="App">
      <h3>Try it now</h3>
      <Navbar />
     <h4 className="result">Result</h4>
     <Content/>
    </div>
  );
}

export default App;
