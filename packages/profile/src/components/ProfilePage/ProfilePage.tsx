import { jsx } from '@emotion/react';
import { FC } from 'react';
import { InstaHead } from '../InstaHead/InstaHead';

import styles from './styles';

export const ProfilePage: FC = () => (
    <div css={styles}>
        <div className="container">
            <div className="row">
                <div className="cal">
                    <div className="go-back">
                        <a
                            className="link"
                            href="https://www.instagram.com/ladysdoc/"
                            title="go back"
                        />
                        <div className="title">ladysdoc</div>
                    </div>
                    <InstaHead />
                    <div className="block-item">
                        <div className="block-break has-icon">
                            <span>
                                <i className="fa fai fa-5"></i>
                            </span>
                        </div>
                    </div>
                    <div className="block-item">
                        <div className="block-text">ЗАПИСАТЬСЯ НА ПРИЕМ</div>
                    </div>
                    <div className="block-item">
                        <div className="block-break">
                            <span></span>
                        </div>
                    </div>
                    <div className="block-item">
                        <a
                            className="block-button till"
                            href="http://chudodoctor.infoclinica.ru/schedule?departments=200&doctors=2426&filial=1&cashid=4&step=4"
                        >
                            <div className="title">КЛИНИКА ЧУДО-ДОКТОР</div>
                            <div className="subtitle">
                                М. РИМСКАЯ, М. ПЛОЩАДЬ ИЛЬИЧА
                            </div>
                        </a>
                    </div>
                    <div className="block-item">
                        <div className="block-break">
                            <span></span>
                        </div>
                    </div>
                    <div className="block-item">
                        <div className="block-text">ИНФОРМАЦИЯ</div>
                    </div>
                    <div className="block-item">
                        <a
                            className="block-button brown"
                            href="http://ladysdoc.ru"
                        >
                            <div className="title">ЛИЧНЫЙ САЙТ</div>
                            <div className="subtitle">
                                ОБО МНЕ И МОЕМ ПОДХОДЕ
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
