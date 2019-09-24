import React, {useEffect} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 125px;
    flex-wrap: wrap;    
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    text-align: center;
`;
const Day = styled.h2`
  width: 75px;
    
`;
const Image = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
`;
const Temperature = styled.div`
  width: 75px;  
`;
const Card = () => {
    const fetchInfo = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=56ec6c59168fcde51a22b2784be6d879');
        const json = await response.json();
        console.log(json);
    }
    useEffect(() => {
        fetchInfo();
    }, [])
    return(
    <Wrapper>
        <Day>Wed</Day>
        <Image src='https://ssl.gstatic.com/onebox/weather/48/sunny.png'></Image>
        <Temperature>
            <h2>78° 57°</h2>
        </Temperature>
    </Wrapper>
)};

export default Card;