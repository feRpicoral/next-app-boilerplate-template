import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 15% 0;
`;

const Message = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 120px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    :before {
        content: 'Hello, world ';
    }
    :after {
        content: '👋';
    }
`;

const Home = () => (
    <Container>
        <Message />
    </Container>
);

export default Home;
