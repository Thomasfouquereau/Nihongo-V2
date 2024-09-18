import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.$fontColor};
    margin-left: 3vw;
    width: 74vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        margin-left: 0;
        width: 100vw;
        align-items: center;
        gap: 3vw;
    }
`

const ContainerTitle = styled.div`
    display: flex;
    width: 100%;
    height: 16.5vw;
    padding: 1vw;
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$fontColor};
    gap: 0.6vw;
    border-radius: 0.8vw;
    margin-top: 6vw;
    h1{
        font-size: 12vw;
        width: 90%;
        margin: 0;
        text-align: center;
        background-color: ${(props) => props.$mainBgColor};
        border-radius: 0.5vw;
        @media screen and (max-width: 560px) {
            width: 100%;
            height: 80%;
            font-size: 17vw;
            border-radius:  0 0 1vw 1vw;
        }
    }
    @media screen and (max-width: 560px) {
        height: 50vw;
        width: 90%;
        flex-direction: column-reverse;
        align-items: center;
        gap: 0;
        padding: 2vw;
        border-radius: 1.8vw;
    }
`

const KanjiTitle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$color};
    font-size: 3.2vw;
    text-align: center;
    width:10%;
    justify-content: center;
    border-radius: 0.5vw;
    span{
        transform:translateY(-0.3vw);
        font-weight: 600;
        @media screen and (max-width: 560px) {
            height: 10%;  
        }
    }
    @media screen and (max-width: 560px) {
            width: 100%;
            flex-direction: row;
            font-size: 6vw;
            height: 30%;
            align-items: center;
            border-radius:  1vw 1vw 0 0;
            padding-top: 6vw;
        }
`

const ContainerContent = styled.div`
    display: flex;
    width: 76vw;
    gap: 1vw;
    @media screen and (max-width: 560px) {
        width: calc(90% + 4vw);
        flex-direction: column;
        gap: 3vw;
    }
`

const Actu = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    gap: 0.5vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    @media screen and (max-width: 560px) {
        width:  calc(100% - 4vw);
        padding: 2vw;
        border-radius: 1.8vw;
        gap: 1vw;
    }
`

const ActuTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 6vw;
    gap: 0.5vw;
    color: ${(props) => props.$fontColor};
    @media screen and (max-width: 560px) {
        height: 12vw;
        gap: 1vw;
    }
`

const ActuTitleFr = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    font-size: 2.5vw;
    background-color: ${(props) => props.$mainBgColor};
    padding: 0.5vw 1vw;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`

const ActuTitleJp = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    font-size: 2.5vw;
    background-color: ${(props) => props.$mainBgColor};
    padding: 0.5vw 1vw;
    color: ${(props) => props.$color};
    border-radius: 0.5vw;
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`

const ActuArticleTitleContainer = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 4vw;
    @media screen and (max-width: 560px) {
        height: 10vw;
        gap: 1vw;
    }
`

const ActuArticleTitleDate = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
    @media screen and (max-width: 560px) {
        font-size: 3vw;
    }
`

const ActuArticleTitle = styled.h4`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    font-weight: 600;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
    @media screen and (max-width: 560px) {
        font-size: 4vw;
        padding-left: 2vw;
    }
`

const ActuArticleContent = styled.p`
    display: flex;
    align-items: center;
    border-radius: 0.5vw;
    max-width: 100%;
    max-height: 11vw;
    min-height: 11vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.5vw 1vw;
    margin: 0;
    font-size: 1vw;
    @media screen and (max-width: 560px) {
        font-size: 2.5vw;
        max-height: 25vw;
        min-height: 25vw;
        padding: 1vw 2vw;
    }
`

const Milestone = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
    background-color: ${(props) => props.$bgColor};
    @media screen and (max-width: 560px) {
        width:  calc(100% - 4vw);
        padding: 2vw;
        border-radius: 1.8vw;
        gap: 1vw;
    }
`

const MilestoneTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    width: 100%;
    height: 7vw;
    border-radius: 0.5vw;
    color: ${(props) => props.$fontColor};
    background-color: ${(props) => props.$mainBgColor};
    @media screen and (max-width: 560px) {
        height: 20vw;
        gap: 1vw;
    }
`

const MilestoneTitleFr = styled.h3`
    font-size: 2.5vw;
    height: 40%;
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`

const MilestoneTitleJp = styled.h3`
    font-size: 2vw;
    height: 40%;
    color: ${(props) => props.$color};
    @media screen and (max-width: 560px) {
        font-size: 6vw;
    }
`

const MilestoneContent = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    height: 3.5vw;
    @media screen and (max-width: 560px) {
        height: 10vw;
        gap: 1vw;
    }
`

const MilestoneContentTitle1 = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
    }
`

const MilestoneContnet1 = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 15%;
    }
`

const MilestoneContentTitle2 = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 85%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
    }
`

const MilestoneContnet2 = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 25%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 30%;
    }
`

const MilestoneContentTitle3 = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 75%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
    }
`

const MilestoneContnet3 = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 35%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 40%;
    }
`

const MilestoneContentTitle4 = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 90%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
    }
`

const MilestoneContnet4 = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    padding: 0.5vw 1vw;
    border-radius: 0.5vw;
    width: 10%;
    @media screen and (max-width: 560px) {
        font-size: 4.5vw;
        width: 15%;
    }
`


export default function Home() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const nombreDeKanji = useSelector((state) => state.totalData.kanji);
    const nombreDeVocabulaire = useSelector((state) => state.totalData.vocabulaire);

    return (
        <Container>
            <ContainerTitle $mainBgColor={mainBgColor} $bgColor={bgColor} $fontColor={fontColor}>
                <h1 >NIHONGO</h1>
                <KanjiTitle $color={color} $mainBgColor={mainBgColor}>
                    <span>日</span>
                    <span>本</span>
                    <span>語</span>
                </KanjiTitle>
            </ContainerTitle>
            <ContainerContent>
                <Actu $bgColor={bgColor}>
                    <ActuTitleContainer $fontColor={fontColor}>
                        <ActuTitleFr $mainBgColor={mainBgColor}>Actualité</ActuTitleFr>
                        <ActuTitleJp $mainBgColor={mainBgColor} $color={color} >ニュース</ActuTitleJp>
                    </ActuTitleContainer>
                    <ActuArticleTitleContainer>
                        <ActuArticleTitleDate $mainBgColor={mainBgColor} $color={color}>18/08</ActuArticleTitleDate>
                        <ActuArticleTitle $mainBgColor={mainBgColor} $fontColor={fontColor}>Lancement de NIHONGO Alpha</ActuArticleTitle>
                    </ActuArticleTitleContainer>
                    <ActuArticleContent $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        v01w32a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque.
                        Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra. Morbi facilisis facilisis tempor.
                        Sed posuere fermentum ligula ut sodales. Pellentesque elementum volutpat nulla, eget fringilla lectus
                        luctus sit amet.
                    </ActuArticleContent>
                </Actu>
                <Milestone $bgColor={bgColor}>
                    <MilestoneTitleContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <MilestoneTitleFr>Avancement</MilestoneTitleFr>
                        <MilestoneTitleJp $color={color}>アドバンス</MilestoneTitleJp>
                    </MilestoneTitleContainer>
                    <MilestoneContent>
                        <MilestoneContentTitle1 $mainBgColor={mainBgColor} $fontColor={fontColor}>Katakana</MilestoneContentTitle1>
                        <MilestoneContnet1 $mainBgColor={mainBgColor} $color={color}>90%</MilestoneContnet1>
                    </MilestoneContent>
                    <MilestoneContent>
                        <MilestoneContentTitle2 $mainBgColor={mainBgColor} $fontColor={fontColor}>Nombre de vocabulaire</MilestoneContentTitle2>
                        <MilestoneContnet2 $mainBgColor={mainBgColor} $color={color}>{nombreDeVocabulaire}/?</MilestoneContnet2>
                    </MilestoneContent>
                    <MilestoneContent>
                        <MilestoneContentTitle3 $mainBgColor={mainBgColor} $fontColor={fontColor}>Nombre de kanji</MilestoneContentTitle3>
                        <MilestoneContnet3 $mainBgColor={mainBgColor} $color={color}>{nombreDeKanji}/2000</MilestoneContnet3>
                    </MilestoneContent>
                    <MilestoneContent>
                        <MilestoneContentTitle4 $mainBgColor={mainBgColor} $fontColor={fontColor}>Hiragana</MilestoneContentTitle4>
                        <MilestoneContnet4 $mainBgColor={mainBgColor} $color={color}>80%</MilestoneContnet4>
                    </MilestoneContent>
                </Milestone>
            </ContainerContent>
        </Container>
    );
}