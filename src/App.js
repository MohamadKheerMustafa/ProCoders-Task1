import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Content/Main";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
