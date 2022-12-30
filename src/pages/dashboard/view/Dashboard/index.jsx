import { Header } from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Main } from '@/layouts/Main';
import { Wrapper, WrapperContainer, WrapperInner } from '@/layouts/Wrapper';

const Dashboard = () => {
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
};

export default Dashboard;
