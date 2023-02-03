import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Upload />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
