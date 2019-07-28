import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import Feedback from './Feedback';
export default function App():JSX.Element{
    return(
        <h1>
           We will learn React using TypeScript
           <Message/>
           <Feedback/>
        </h1>
    )
}

const root = document.getElementById("app-root");
ReactDOM.render(<App/>,root);