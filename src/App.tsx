import Header from "./components/Header/Header";
import BusinessList from "./components/BusinessList/BusinessList";
import BusinessItem from "./components/BusinessItem/BusinessItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BusinessList />} />
          <Route path="/businessItem" element={<BusinessItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
