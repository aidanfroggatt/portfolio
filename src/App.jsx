import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfoPage from './pages/InfoPage.jsx';
import WorkPage from "./pages/WorkPage.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WorkPage/>} />
                <Route path="/info" element={<InfoPage/>} />
            </Routes>
        </Router>
    )
}

export default App;
