import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import iconArrow from '../../../assets/icon-arrow.svg';

const HeaderBottom = styled.div`
    display: flex;
    gap: 1vw;
    max-width: 76vw;
`

const Dictionnaire = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6vw;
    background-color: ${(props) => props.$bgColor};
    width: 70%;
    height: 21.5vw;
    padding: 1vw;
    border-radius: 0.8vw;
`

const DicitonnaireTitleContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 0.6vw;
    height: 5vw;
`

const DicitonnaireTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 50%; 
    font-size: 1.5vw;
`

const DicitionnaireName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$color};
    color: #F7F7F2;
    border-radius: 0.5vw;
    width: 50%;
    font-size: 1vw;
`

const DicitionnaireBottom = styled.div`
    display: flex;
    height: 16vw;
    gap: 0.6vw;
`

const DictionnaireLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 75%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    &:hover{
        background-color: #858585;
    }
`

const DictionnaireLinkFurigana = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${(props) => props.$color};
    span{
        font-size: 1.3vw;
        width: 5vw;
    }
`

const DictionnaireLinkKanji = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 5vw;
        font-weight: 700;
        width: 5vw;
        transform: translateY(-0.7vw);
    }
`

const HanchorExercices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 25%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    img{
        width: 4vw;
        height: 4vw;
    }
    &:hover{
        background-color: #858585;
    }
`

const HanchorExercicesFr = styled.div`
    text-align:center;
    font-size: 1.5vw;
`

const HanchorExercicesFurigana = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: ${(props) => props.$color};
    span{
        font-size: 1vw;
        width: 3vw;
    }
`

const HanchorExercicesKanji = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    span{
        font-size: 3vw;
        width: 3vw;
        transform: translateY(-0.7vw);
    }
`

const ComingSoon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$bgColor};
    border-radius: 0.8vw;
    width: 24%;
    height: 21.5vw;
    padding: 1vw;
`

const ComingSoonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$mainBgColor};
    color: ${(props) => props.$fontColor};
    border-radius: 0.5vw;
    width: 100%;
    height: 100%;
    font-size: 1.5vw;
`

const ComingSoonJpTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vw;
`

const ComingSoonKanji = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw;
    font-weight: 700;
    margin-right:0.8vw ;
    color: ${(props) => props.$color};
`

const ComingSoonFurigana = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1vw;
`

export default function HeaderDictionnaireComponent() {
    const { bgColor, fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);

    const location = useLocation();

    const getText = () => {
        switch (location.pathname) {
            case '/Kanji':
                return {
                    titleFurigana1: 'かん',
                    titleFurigana2: 'じ',
                    titleKanji1: '漢',
                    titleKanji2: '字',
                    titleFr: 'Kanji'
                };
            case '/Hiragana':
                return {
                    titleFurigana1: 'ひらがな',
                    titleFurigana2: '',
                    titleKanji1: 'あ',
                    titleKanji2: '',
                    titleFr: 'Hiragana'
                };
            case '/Katakana':
                return {
                    titleFurigana1: 'カタカナ',
                    titleFurigana2: '',
                    titleKanji1: 'ア',
                    titleKanji2: '',
                    titleFr: 'Katakana'
                };
            case '/Vocabulaire':
                return {
                    titleFurigana1: 'ご',
                    titleFurigana2: 'い',
                    titleKanji1: '語',
                    titleKanji2: '彙',
                    titleFr: 'Vocabulaire'
                };
            case '/Nombres':
                return {
                    titleFurigana1: 'ばん',
                    titleFurigana2: 'ごう',
                    titleKanji1: '番',
                    titleKanji2: '号',
                    titleFr: 'Nombres'
                };
            default:
                return 'Accueil';
        }
    };
    const text = getText();
    return (
        <HeaderBottom>
            <Dictionnaire $bgColor={bgColor}>
                <DicitonnaireTitleContainer>
                    <DicitonnaireTitle $mainBgColor={mainBgColor} $fontColor={fontColor}>Dictionnaire</DicitonnaireTitle>
                    <DicitionnaireName $color={color}>
                        <div>
                            <span>{text.titleFurigana1}</span>
                            <span style={{ width: location.pathname === '/Hiragana' || location.pathname === '/Katakana' ? '0vw' : '9vw' }}>
                                {text.titleFurigana2}
                            </span>
                        </div>
                        <div>
                            <span>{text.titleKanji1}</span>
                            <span style={{ width: location.pathname === '/Hiragana' || location.pathname === '/Katakana' ? '0vw' : '9vw' }}>
                                {text.titleKanji2}
                            </span>
                        </div>
                        <span>{text.titleFr}</span>
                    </DicitionnaireName>
                </DicitonnaireTitleContainer>
                <DicitionnaireBottom>
                    <DictionnaireLink to={`/Dictionnaire/${text.titleFr}`} $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <DictionnaireLinkFurigana $color={color}>
                            <span>じ</span>
                            <span>しょ</span>
                        </DictionnaireLinkFurigana>
                        <DictionnaireLinkKanji>
                            <span>辞</span>
                            <span>書</span>
                        </DictionnaireLinkKanji>
                    </DictionnaireLink>
                    <HanchorExercices $mainBgColor={mainBgColor} $fontColor={fontColor}>
                        <HanchorExercicesFr>Exercices</HanchorExercicesFr>
                        <div>
                            <HanchorExercicesFurigana $color={color}>
                                <span>えん</span>
                                <span>しゅう</span>
                            </HanchorExercicesFurigana>
                            <HanchorExercicesKanji>
                                <span>演</span>
                                <span>習</span>
                            </HanchorExercicesKanji>
                        </div>
                        <img src={iconArrow} />
                    </HanchorExercices>
                </DicitionnaireBottom>
            </Dictionnaire>
            <ComingSoon $bgColor={bgColor}>
                <ComingSoonContainer $mainBgColor={mainBgColor} $fontColor={fontColor}>
                    <ComingSoonJpTitleContainer>
                        <ComingSoonKanji $color={color}>
                            <span>近</span>
                            <span>日</span>
                            <span>公</span>
                            <span>開</span>
                        </ComingSoonKanji>
                        <ComingSoonFurigana >
                            <span>き</span>
                            <span>ん</span>
                            <span>じ</span>
                            <span>つ</span>
                            <span>こ</span>
                            <span>う</span>
                            <span>か</span>
                            <span>い</span>
                        </ComingSoonFurigana>
                    </ComingSoonJpTitleContainer>
                    <span>A venir</span>
                </ComingSoonContainer>
            </ComingSoon>
        </HeaderBottom>
    );
}