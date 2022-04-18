import {Route, BrowserRouter, Routes} from "react-router-dom";
import MainPage from "@/components/Pages/MainPage/MainPage";
import ExercisePage from "@/components/Pages/ExercisePage/ExercisePage";
import StatsPage from "@/components/Pages/StatsPage/StatsPage";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/exercises" element={<ExercisePage/>} />
            <Route path="/stats" element={<StatsPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
