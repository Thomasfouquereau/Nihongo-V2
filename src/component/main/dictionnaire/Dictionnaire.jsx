import Header from '../page componet/header';
import styled from 'styled-components';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-left: 3vw;
    margin-top: 6vw;
`;

export default function Dictionnaire() {
    return (
        <HeaderPage>
            <Header />
        </HeaderPage>
    );
}