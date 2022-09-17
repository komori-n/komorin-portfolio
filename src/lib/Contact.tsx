import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const Contact: FC = () => {
    return (
        <Wrapper>
            <div className="line"></div>
            <div className="icons">
                <a className="email" href="mailto:komori-n@ymail.ne.jp" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareEnvelope} size="3x" />
                </a>
                <span className="spacing"></span>
                <a className="github" href="https://github.com/komori-n" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                </a>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
text-align: center;
margin-top: 64px;

.line {
    border-bottom: 1px solid #d0d0d0;
}

.icons {
    margin: 16px;
}

.spacing {
    margin: 12px;
}
a {
    color: #aaa;
    transition: all 0.5s;
}
.email:hover {
    color: #9bf;
}
.github:hover {
    color: black;
}
`
