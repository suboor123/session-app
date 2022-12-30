import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import { Main } from './layouts/main';
import { Wrapper, WrapperContainer, WrapperInner } from './layouts/Wrapper';
import { SignUp } from './pages/auth/view/Signup';
import 'rsuite/dist/rsuite.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/auth/view/SignIn';
import Dashboard from './pages/dashboard/view/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
    // return <SignUp />;
    // return (
    //     <Wrapper>
    //         <WrapperInner>
    //             <Sidebar />
    //             <WrapperContainer>
    //                 <Header />
    //                 <Main></Main>
    //             </WrapperContainer>
    //         </WrapperInner>
    //     </Wrapper>
    // );
}

export default App;
