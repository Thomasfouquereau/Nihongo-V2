import styled from 'styled-components';

import ArticleCard from '../articles/component/ArticleCard';
import articles from '../../data/articles/articles.json';
import ArticlesBavBar from './component/ArticleNavBar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    width: 100%;
    margin-top: 7vw;
    @media screen and (max-width: 560px){
        gap: 5vw;
        flex-direction: column;
        width: 100%;
        margin-top: 20vw;
    }
`

const CardContainer = styled.div`
    display: flex;
    gap: 1vw;
    width: 94%;
    @media screen and (max-width: 560px){
        gap: 5vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 98%;
    }
`

export default function Articles() {
    return (
        <Container>
            <ArticlesBavBar />
            <CardContainer>
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </CardContainer>
        </Container>
    );
}