import SearchPage from "./components/searchpage/SearchPage";
import StatsPage from "./components/statspage/StatsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchHistoryPage from "./components/matchhistorypage/MatchHistoryPage";
import ErrorPage from "./components/errorpage/ErrorPage";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />}></Route>
          <Route path="/StatsPage/:id" element={<StatsPage />}></Route>
          <Route path="/MatchHistory/:id" element={<MatchHistoryPage />}></Route>
          <Route path="/ErrorPage" element={<ErrorPage />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
