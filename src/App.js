import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import GameIntroPage from "./pages/GameIntroPage";
import MemoryPage from "./pages/MemoryPage";
import QuizPage from "./pages/QuizPage";
import Rank from "./components/Game/Rank";
import AdminPage from "./pages/AdminPage";
import IoEntryPage from "./pages/IoEntryPage";
import QuizioPage from "./pages/QuizioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/game-intro" element={<GameIntroPage />} />
        <Route path="/memory-game" element={<MemoryPage />} />
        <Route path="/quiz-game" element={<QuizPage />} />
        <Route path="/memory-rank" element={<Rank gameType="memory" />} />
        <Route path="/quiz-rank" element={<Rank gameType="quiz" />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/quiz.io" element={<IoEntryPage gameType="quiz" />} />
        <Route path="/quiz.io/:roomId" element={<QuizioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
