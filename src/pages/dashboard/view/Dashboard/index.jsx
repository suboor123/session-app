import {
    Wrapper,
    WrapperContainer,
    WrapperInner,
} from '../../../../layouts/Wrapper';
import { Main } from '../../../../layouts/Main';
import Sidebar from '../../../../components/Sidebar';
import { Header } from '../../../../components/Header';

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
