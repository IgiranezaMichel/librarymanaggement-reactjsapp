import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexNavBar from './Component/VisitorComponents/VisitorNavBar';
// import Index from './Pages/IndexPages/Index';
import Index from './Pages/Index';
import SignupPage from './Pages/AuthenticationPages/SignupPage';
import LoginPage from './Pages/AuthenticationPages/LoginPage';
import Team from './Pages/VisitorPages/Team';
import Services from './Pages/VisitorPages/Services';
import Department from './Pages/VisitorPages/Department';
import Contact from './Pages/VisitorPages/Contact';
import News from './Pages/VisitorPages/News';
import TimeTable from './Pages/VisitorPages/TimeTable';
import WorkingHour from './Pages/VisitorPages/WorkingHour';
import BookAppointment from './Pages/VisitorPages/BookAppointment';
import Apply from './Pages/VisitorPages/Apply';
import About from './Pages/VisitorPages/About';

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/service" element={<Services />} />
          <Route path="/department" element={<Department />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/time-table" element={<TimeTable />} />
          <Route path="/working-hour" element={<WorkingHour />} />
          <Route path="/booking-appointment" element={<BookAppointment />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<IndexNavBar />} />
        </Routes>
      </div>
    </Router>
  );
}
