import { FC } from "react";
import kh_screenshot from "./img/kh-screenshot.png"
import cho_ompa from "./img/cho_ompa.png"
import loc_piece from './img/locating-piece.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { Trans, WithTranslation, withTranslation } from 'react-i18next';

export const WorksComponent: FC<WithTranslation> = () => {
    return (
        <Wrapper id="works">
            <h2>Works</h2>
            <>
                <h3>
                    <Trans i18nKey="works.kh.title">
                        KomoringHeights（詰将棋エンジン）
                    </Trans>
                    <span className="spacing"></span>
                    <a href="https://github.com/komori-n/KomoringHeights" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileCode} size="lg" className="code" />
                    </a>
                </h3>
                <img className="kh-img" src={kh_screenshot} />
                <Trans i18nKey="works.kh.desc">
                    <p>
                        C++17製の詰将棋エンジン。指し手生成などの将棋の基本機能は
                        <a href="https://github.com/yaneurao/YaneuraOu" target="_blank" rel="noopener noreferrer">
                            やねうら王
                        </a>
                        を使用している。
                    </p>
                    <p>
                        df-pn+アルゴリズムを基本として、GHI（Graph History Interaction）問題の回避や
                        合流検出による二重カウント問題の抑制を行っており、
                        <a href="http://toybox.tea-nifty.com/memo/2005/05/post_3535.html" target="_blank" rel="noopener noreferrer">
                            コンピュータ向け超難解詰将棋作品集
                        </a>
                        をすべて解くことができる。
                    </p>
                </Trans>
                <p>
                    <a href="https://github.com/komori-n/KomoringHeights" target="_blank" rel="noopener noreferrer">
                        <img src="https://gh-card.dev/repos/komori-n/KomoringHeights.svg" />
                    </a>
                </p>
            </>

            <>
                <h3 className="section-space">
                    <Trans i18nKey="works.piece.title">
                        利かずの駒並べソルバ
                    </Trans>
                    <span className="spacing"></span>
                    <a href="https://github.com/komori-n/shogi-piece-placement" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileCode} size="lg" className="code" />
                    </a>
                </h3>
                <img className="kikazu-img" src={loc_piece} />
                <Trans i18nKey="works.piece.desc">
                    <p>
                        すべての駒を、他の駒の利きに入らない升へ配置するパズル「利かずの駒並べ」のC++製ソルバ。
                    </p>
                    <p>
                        解が不明だったいくつかの双方向駒並べ問題に対し求解に成功した。
                    </p>
                </Trans>

                <a href="https://github.com/komori-n/shogi-piece-placement" target="_blank" rel="noopener noreferrer">
                    <img src="https://gh-card.dev/repos/komori-n/shogi-piece-placement.svg" />
                </a>
            </>

            <>
                <h3 className="section-space">
                    <Trans i18nKey="works.blog.title">
                        コウモリのちょーおんぱ（ブログ）
                    </Trans>
                    <span className="spacing"></span>
                    <a href="https://komorinfo.com/blog/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLink} size="lg" className="code" />
                    </a>
                </h3>
                <Trans i18nKey="works.blog.desc">
                    <p>
                        2020年7月より続けている技術ブログ。
                    </p>
                    <p>
                        月1本程度の頻度で日々の困りごとや技術解説について投稿している。
                    </p>
                </Trans>
                <a href="https://komorinfo.com/blog/" target="_blank" rel="noopener noreferrer">
                    <img className="blog-img" src={cho_ompa} />
                </a>
            </>
        </Wrapper>
    )
}

export const Works = withTranslation()(WorksComponent);

const Wrapper = styled.div`
a:hover {
    opacity: 0.7;
}
.spacing {
    margin-right: 12px;
}
.code {
    color: #aaa;
}
.code:hover {
    color: #111
}
.section-space {
    margin-top: 60px;
}

.kh-img {
    width: 100%;
}

.kikazu-img {
    width: 320px;
    margin-top: -0.5em;
    margin-bottom: -0.5em;
    z-index: 0;
}

.blog-img {
    width: 360px;
}

img {
    max-width: 100%;
}
`