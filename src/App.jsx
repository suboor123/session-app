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
import { Wrapper, WrapperContainer, WrapperInner } from './layouts/Wrapper';
import Sidebar from './components/Sidebar';
import { Header } from './components/Header';
import { Main } from './layouts/Main';
import Modal from './components/Modal';

function PrivateOutlet() {
    return userHelper.isAuthenticated ? (
        <Wrapper>
            <WrapperInner>
                <Sidebar />
                <WrapperContainer>
                    <Header />
                    <Main>
                        <Outlet />
                    </Main>
                </WrapperContainer>
            </WrapperInner>
        </Wrapper>
    ) : (
        <Navigate to="/login" />
    );
}

function App() {
    const navigateTo = (() =>
        userHelper.isAuthenticated ? '/dashboard' : '/login')();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={navigateTo} />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/dashboard" element={<PrivateOutlet />}>
                    {/*
                     * Define private routes here
                     * Rest of the application routes going to declare here
                     */}
                    <Route path="" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
