import styled from "styled-components";

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    @media (max-width: 760px) {        
        width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    padding: 5%;    
    border-radius: 50%;
`;