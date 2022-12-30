import './App.css';
import { SignUp } from './pages/auth/view/Signup';
import 'rsuite/dist/rsuite.min.css';
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from 'react-router-dom';
import { SignIn } from './pages/auth/view/SignIn';
import Dashboard from './pages/dashboard/view/Dashboard';
import { userHelper } from './pages/user/helpers';

function PrivateOutlet() {
    return userHelper.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/dashboard" element={<PrivateOutlet />}>
                    {/* Define private routes here */}
                    <Route path="" element={<Dashboard />} />
                    <Route path="user" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
