import { FC } from "react";
import styled from 'styled-components';
import { Trans, WithTranslation, withTranslation } from 'react-i18next';

const SkillsComponent: FC<WithTranslation> = () => {
    return (
        <Wrapper id="skills">
            <h2>Skills</h2>
            <h3>
                <Trans i18nKey="skills.c.title">
                    C言語 / C++
                </Trans>
            </h3>
            <Trans i18nKey="skills.c.desc">
                <p>
                    最近よく使う。特にC++11/14/17環境を使うことが多い。
                    デバイスドライバからスーパーコンピュータまで幅広いレイヤーで使用経験がある。
                </p>
                <p>
                    特にプログラムの高速化に対しこだわりが強い。高速化のためならSFINAEや手動アンローリングも積極的に行う。
                </p>
            </Trans>
            <>
                <h3>
                    Rust
                </h3>
                <Trans i18nKey="skills.rust.desc">
                    <p>
                        C++の頭痛ポイントがほとんど解消されてるため、C++より好み。
                        AWS Lambdaや組み込みデバイスの実装で使用経験あり。
                    </p>
                </Trans>
            </>
            <>
                <h3>
                    <Trans i18nKey="skills.english.title">
                        英語
                    </Trans>
                </h3>
                <Trans i18nKey="skills.english.desc">
                    <p>
                        ビジネス初級レベル程度。
                    </p>
                </Trans>
            </>
        </Wrapper>
    )
}

export const Skills = withTranslation()(SkillsComponent)

const Wrapper = styled.div`
    .svg-inline--fa {
        vertical-align: 0;
    }
    .spacing {
        padding: 4px;
    }
`