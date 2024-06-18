import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./JSON/data.json";
import Article from './components/Article';
import Detail from './components/Detail';
import Works from './components/Works';
import WorksPage from './components/WorksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;