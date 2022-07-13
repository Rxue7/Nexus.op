import SearchPage from "./components/searchpage/SearchPage";
import StatsPage from "./components/statspage/StatsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchHistoryPage from "./components/matchhistorypage/MatchHistoryPage";
import LoadingPage from "./components/loadingpage/LoadingPage";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />}></Route>
          <Route path="/StatsPage/:id" element={<StatsPage />}></Route>
          <Route path="/MatchHistory/:id" element={<MatchHistoryPage />}></Route>
          <Route path="/Loading" element={<LoadingPage />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
