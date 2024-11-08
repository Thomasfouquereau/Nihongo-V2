import propTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import easyIcon from '../../../../../assets/icon-reglage-1.svg';
import mediumIcon from '../../../../../assets/icon-reglage-3.svg';

const Container = styled.div`
    display: flex;
    width: 92%;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    gap: 0.5vw;
    height: 17vw;
    h1{
        font-size: 2.5vw;
        font-weight: 600;
        max-width: 40%;
        width: 40%;
        min-width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5vw;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        text-align: center;
        padding: 1vw;
        @media screen and (max-width: 560px){
            font-size: 7vw;
            width: 100%;
        }
    }
    @media screen and (max-width: 560px){
        flex-direction: column;
        height: 100%;
    }
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    width: 60%;
    @media screen and (max-width: 560px){
        width: 100%;
    }
`

const InfoContainer = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    span{
        background-color: ${(props) => props.$color} ;
        color: #F7F7F2;
        border-radius: 0.5vw;
        padding: 0.5vw;
        font-size: 1.7vw;
        text-transform: capitalize;
        width: 40%;
        text-align: center;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }
    p{
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        border-radius: 0.5vw;
        padding: 0.5vw;
        font-size: 1.7vw;
        width: 13%;
        text-align: center;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }
`

const ExercisesContainer = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
`

const Exercises = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.$mainBgColor};
    padding: 1vw;
    width: 50%;
    height: 11.5vw;
    border-radius: 0.5vw;
    p{
        width: 100%;
        text-align: center;
        font-size: 2vw;
        font-weight: 600;
        color: ${(props) => props.$fontColor};
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ExercisesInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5vw;
    align-items: center;
    height: 30%;
    p{
        background-color: ${(props) => props.$bgColor};
        color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        padding: 0.5vw;
        font-size: 1vw;
        height: 100%;
        width: 35%;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }

`

const ExercisesDifficult = styled.div`
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    padding: 0.5vw;
    display: flex;
    gap: 1vw;
    align-items: center;
    justify-content: space-between;
    width: 65%;
    height: 100%;
    p{
        font-size: 1.2vw;
        width: 90%;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: start;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }
    img{
        width: 2.5vw;
        height: 2.5vw;
        @media screen and (max-width: 560px){
            width: 6vw;
            height: 6vw;
        }
    }
`

const NBQuestions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$mainBgColor};
    border-radius: 0.5vw;
    width: 35%;
    height: 100%;
    padding: 0.5vw;
    p{
        font-size: 1vw;
        text-align: center;
        padding: 0vw;
        @media screen and (max-width: 560px){
            border-radius: 3vw;
        }
    }
    p:nth-child(1){
        font-size: 1.5vw;
    }
`

export default function ArticleHeader({ article }) {

    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    return (
        <Container $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor}>
            <h1>{article.title}</h1>
            <RightContainer>
                <InfoContainer $color={color} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    {article.filters.map((filter, index) => (
                        <span key={index}>{filter}</span>
                    ))}
                    <p>{article.readingTime}</p>
                </InfoContainer>
                <ExercisesContainer>
                    <Exercises $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <p>{article.exercises.exercisesNameEasy}</p>
                        <ExercisesInfo $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                            <ExercisesDifficult $bgColor={bgColor} $mainBgColor={mainBgColor}>
                                <p>Premier pas</p>
                                <img src={easyIcon} alt="" />
                            </ExercisesDifficult>
                            <NBQuestions $bgColor={bgColor} $mainBgColor={mainBgColor}>
                                <p>{article.exercises.numberOfQuestionsEasy}</p>
                                <p>Questions</p>
                            </NBQuestions>
                        </ExercisesInfo>
                    </Exercises>
                    <Exercises $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <p>{article.exercises.exercisesNameMedium}</p>
                        <ExercisesInfo $bgColor={bgColor} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                            <ExercisesDifficult $bgColor={bgColor} $mainBgColor={mainBgColor}>
                                <p>Développement Avancé</p>
                                <img src={mediumIcon} alt="" />
                            </ExercisesDifficult>
                            <NBQuestions $bgColor={bgColor} $mainBgColor={mainBgColor}>
                                <p>{article.exercises.numberOfQuestionsMedium}</p>
                                <p>Questions</p>
                            </NBQuestions>
                        </ExercisesInfo>
                    </Exercises>
                </ExercisesContainer>
            </RightContainer>
        </Container>
    );
}

ArticleHeader.propTypes = {

    article: propTypes.object,

};