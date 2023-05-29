import React from 'react';
import { Button } from './components/buttons';

function App() {
    return (
        <div className="app">
            <Button
                boxShadowBlur={-8}
                horizontalPadding="16px"
                backgroundColor="#31C3BD"
                hoverBackgroundColor="#65E9E4"
                boxShadowColor="#118C87"
            >
                Button
            </Button>
        </div>
    );
}

export default App;
