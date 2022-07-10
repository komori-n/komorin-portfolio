import { FC } from "react";
import { Contact } from "./lib/Contact";
import { Top } from "./lib/Top";
import { Works } from "./lib/Works";
import styled from 'styled-components';
import { Header } from './lib/Header';
import { Skills } from './lib/Skills';

export const App: FC = () => {
    return (
        <>
            <Header />
            <Wrapper id="head">
                <div className="container">
                    <Top />
                    <Skills />
                    <Works />
                    <Contact />
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
padding-top: 40px;
top: 0;
color: #333;
margin: 0 12px;
scroll-behavior: smooth;

.container {
    max-width: 720px;
    margin: 0 auto;
}

h2 {
    font-size: 32px;
    margin-top: 44px;
    border-bottom: 1px solid #d0d0d0;
}
h3 {
    font-size: 24px;
}
p {
    color: #666;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
}
`