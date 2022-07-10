import { Component } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class MobileHeaderComponent extends Component<WithTranslation> {
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="anchors">
                        <ul>
                            <li>
                                <AnchorLink href="#top" offset="280" className="anchor-link">Top</AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#about" offset="280" className="anchor-link">About</AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#skills" offset="280" className="anchor-link">Skills</AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#works" offset="280" className="anchor-link">Works</AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export const MobileHeader = withTranslation()(MobileHeaderComponent);

const Wrapper = styled.div`
background-color: rgba(48, 160, 255, 0.5);

.anchors ul {
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
}

.anchors li {
    width: 100%;
    list-style-type: none;
}

.anchors li:hover {
    background-color: rgba(48, 160, 255, 1.0);
}

.anchor-link {
    display: inline-block;
    padding-top: 14px;
    padding-bottom: 14px;
    width: 100%;
}

.container {
    text-align: center;
    margin: 0 12px;
}

img {
    width: 196px;
}

p {
    margin: 0;
}

.name {
    color: white;
    margin-top: 8px;
}
`