import { FC, useState } from 'react';
import styled from 'styled-components';
import icon from './img/icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MobileHeader } from './MobileHeader';
import i18n from '../i18n/configs';
import { Trans } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type State = {
    lang: 'ja' | 'en'
    isOpen: boolean
    value: number
}

export const Header: FC = () => {
    const [state, setState] = useState<State>({
        lang: 'ja',
        isOpen: false,
        value: 0
    })
    const onClick = () => {
        setState({
            ...state,
            isOpen: !state.isOpen,
            value: state.value + 1
        });
    };

    const onChangeLang = (lang: 'ja' | 'en') => {
        i18n.changeLanguage(lang);
        setState({ ...state, lang: lang });
    }

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    return (
        <div key={(state.isOpen ? "open" : "close") + state.lang}>
            <Wrapper onLoad={() => {
                document.body.style.overflow = 'unset';
                window.scrollTo(scrollX, scrollY)
            }} >
                <div className="main-bar">
                    <div className="container">
                        <h1>
                            <a href="https://komori-n.github.io/komorin-portfolio">
                                komori-n<span className="remove-when-mobile-mode">'s portfolio</span>
                            </a>
                        </h1>
                        <div className="right">
                            <div className="full">
                                <p>
                                    <a href="https://github.com/komori-n" target="_blank" rel="noopener noreferrer">
                                        <img src={icon}></img>
                                        <Trans i18nKey="header.name">
                                            坪井俊憲（Toshinori Tsuboi; komori-n）
                                        </Trans>
                                    </a>
                                </p>
                            </div>
                            <div className="mobile">
                                <a onClick={onClick} href="#">
                                    <FontAwesomeIcon icon={faBars} size="2x" />
                                </a>
                            </div>
                            <div className="lang">
                                <p>
                                    <a
                                        href="#"
                                        className={state.lang == 'ja' ? 'lang-enabled' : 'lang-disabled'}
                                        onClick={() => onChangeLang('ja')}
                                    >
                                        <span>JA</span>
                                    </a>
                                    |
                                    <a
                                        href="#"
                                        className={state.lang == 'en' ? 'lang-enabled' : 'lang-disabled'}
                                        onClick={() => onChangeLang('en')}
                                    >
                                        <span>EN</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="center remove-when-mobile-mode">
                            <ul>
                                <li>
                                    <AnchorLink href="#top" offset="72">Top</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#about" offset="72">About</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#skills" offset="72">Skills</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#works" offset="72">Works</AnchorLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="remove-when-non-mobile-mode">
                    {state.isOpen ? <MobileHeader /> : <></>}
                </div>
            </Wrapper >
        </div>
    )
}

const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
margin: 0 auto;
z-index: 10;

.main-bar{
    height: 52px;
    background-color: rgba(48, 160, 255, 0.7);
}

.container {
    margin: 0 12px;
}

h1 {
    float: left;
    font-size: 24px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin: 0;
    padding: 8px 0;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    opacity: 0.8;
}

.center ul {
    text - align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 14px;
}

.center li {
    display: inline-block;
    list-style-type: none;
    margin: 0 16px;
}

.right {
    float: right;
    color: white;
}

.right p {
    margin - block - start: 0px;
    margin-block-end: 0px;
    margin: 0;
    padding: 10px 0;
}

.right img {
    width: 32px;
    vertical-align: middle;
    margin-right: 6px;
}

.full {
    float: right;
}

.mobile {
    display: none;
    float: right;
    margin: 9px 2px;
}

.lang {
    float: right;
    margin: 4px 20px;
}

.right a {
    color: white;
}

.lang a {
    padding: 8px;
}

.lang-enabled:hover {
    opacity: 1.0;
}

.lang-disabled {
    opacity: 0.4;
}

.disabled {
    display: none;
}

.remove-when-non-mobile-mode {
    display: none;
}

@media(max-width: 1080px) {
    .full {
        display: none;
    }
}

@media(max-width: 720px) {
    .mobile {
        display: block;
    }

    .remove-when-non-mobile-mode {
        display: block;
    }

    .remove-when-mobile-mode {
        display: none;
    }
}
`