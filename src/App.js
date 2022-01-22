import './App.css';
import TabPage from "./pages/tabPage/TabPage";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import SplashPage from "./pages/splash/SplashPage";
import ConfirmPage from "./pages/confirm/ConfirmPage";

function App() {
    return (
        <Router>
            <div className="appContainer">
                <Routes>
                    <Route path="/" element={<TabPage/>}/>
                    <Route path="/confirm" element={<ConfirmPage/>}/>
                    {/*todo policy page*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
