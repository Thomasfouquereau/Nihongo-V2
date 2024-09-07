import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const KanaFilterContainer = styled.div`
display: flex;
gap: 0.6vw;
height: 100%;
min-width: calc(40% - 0.7vw);
    button{
        padding: 1vw;
        border-radius: 0.5vw;
        border: none;
        background-color: ${(props) => props.$mainBgColor};
        color: ${(props) => props.$fontColor};
        font-size: 1.8vw;
        font-weight: 700;
        &:hover{
            background-color: #858585;
        }
    }
    button:nth-child(1){
        width: 60%;
    }
    button:nth-child(2){
        width: 40%;
    }
`

export default function KanaFilter({ filterKana }) {
    const { fontColor, mainBgColor } = useSelector((state) => state.mode);
    const { color } = useSelector((state) => state.color);
    const [selectedOption, setSelectedOption] = useState('N5');

    const handleChange = (event) => {
        const value = event.target.value;
        if (selectedOption === value) {
            setSelectedOption(''); // Réinitialise la sélection si le même bouton est cliqué
            filterKana(''); // Appelle la fonction de rappel avec une chaîne vide
        } else {
            setSelectedOption(value);
            filterKana(value); // Appelle la fonction de rappel avec la valeur sélectionnée
        }
    };

    return (
        <KanaFilterContainer name="Kana" id="Kana" value={selectedOption}  $mainBgColor={mainBgColor} $fontColor={fontColor} $color={color}>
            <button value="Combinaison" onClick={handleChange}>Les combinaisons</button>
            <button value="Accents" onClick={handleChange}>Les accents</button>
        </KanaFilterContainer>
    );
}

KanaFilter.propTypes = {
    filterKana: PropTypes.func.isRequired,
};