import { useState } from 'react';
import { Container } from 'react-bootstrap';

import Nav from './components/Nav';
import Home from './views/Home';
import Films from './views/Films';
import People from './views/People';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
    const [key, setKey] = useState('home');

    switch (key) {
        case 'home':
            return (
                <>
                    <GlobalStyle />
                    <Container>
                        <Nav setKey={setKey} active="home" />
                        <Home />
                    </Container>
                </>
            );
        case 'films':
            return (
                <>
                    <GlobalStyle />
                    <Container>
                        <Nav setKey={setKey} active="films" />
                        <Films />
                    </Container>
                </>
            );
        case 'people':
            return (
                <>
                    <GlobalStyle />
                    <Container>
                        <Nav setKey={setKey} active="people" />
                        <People />
                    </Container>
                </>
            );
        default:
            return (
                <>
                    <GlobalStyle />
                    <Container>
                        <Nav setKey={setKey} active="home" />
                        <Home />
                    </Container>
                </>
            );  
    }
    
}

export default App
