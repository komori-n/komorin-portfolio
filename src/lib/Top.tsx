import { FC } from 'react';
import { Trans, withTranslation, WithTranslation } from 'react-i18next';
import circle_icon from './img/icon-modified.png';
import styled from 'styled-components';

const TopComponent: FC<WithTranslation> = () => {
    return (
        <Wrapper>
            <div id="top" className="centering">
                <img src={circle_icon} />
                <Trans i18nKey="top.name">
                    <p className="name top-space">
                        坪井 俊憲（komori-n）
                    </p>
                    <p className="name">
                        Toshinori Tsuboi
                    </p>
                </Trans>
            </div>
            <h2 id="about">About</h2>
            <Trans i18nKey="top.lines">
                <p>名古屋 or 東京で働く車載向け組み込みソフトエンジニア。</p>
                <p>学生時代は応用数学を少しかじっていた。</p>
                <p>好きな言語はC++とRust。趣味は将棋と城巡り。</p>
            </Trans>
        </Wrapper>
    )
}

export const Top = withTranslation()(TopComponent);

const Wrapper = styled.div`
padding-top: 28px;
img {
    max-width: 100%;
    width: 256px;
}
.centering {
    text-align: center;
}
.top-space {
    margin-top: 16px;
}
p {
    margin-block-end: 0.2em !important;
}
img {
    width: 256px;
}

.name {
    font-size: 22px;
}
`