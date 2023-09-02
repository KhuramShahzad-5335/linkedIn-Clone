import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
