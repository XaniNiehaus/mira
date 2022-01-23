import './App.css';
import TabPage from "./pages/tabPage/TabPage";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import ConfirmPage from "./pages/confirm/ConfirmPage";
import MyProvider from "./context/MyProvider"


function App() {
    return (
        <Router>
            <MyProvider>
                <div className="appContainer">
                    <Routes>
                        <Route path="/" element={<TabPage/>}/>
                        <Route path="/confirm" element={<ConfirmPage/>}/>
                        {/*todo policy page*/}
                    </Routes>
                </div>
            </MyProvider>
        </Router>
    );
}

export default App;
