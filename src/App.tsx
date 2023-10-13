import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexNavBar from './Component/IndexNavBar';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IndexNavBar />} />
          <Route path="/apointment" element={<IndexNavBar />} />
          <Route path="/timetable" element={<IndexNavBar />} />
          <Route path="/signup" element={<IndexNavBar />} />
          <Route path="/login" element={<IndexNavBar />} />
          <Route path="*" element={<IndexNavBar />} />
        </Routes>
      </div>
    </Router>
  );
}
