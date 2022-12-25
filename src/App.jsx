import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import { Main } from './layouts/main';
import { Wrapper, WrapperContainer, WrapperInner } from './layouts/Wrapper';
import { SignUp } from './pages/auth/view/Signup';

function App() {
    return <SignUp />;
    return (
        <Wrapper>
            <WrapperInner>
                <Sidebar />
                <WrapperContainer>
                    <Header />
                    <Main></Main>
                </WrapperContainer>
            </WrapperInner>
        </Wrapper>
    );
}

export default App;
