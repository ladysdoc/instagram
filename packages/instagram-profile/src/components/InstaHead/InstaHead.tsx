import { jsx } from '@emotion/react';
import { FC } from 'react';

import styles from './styles';

export const InstaHead: FC = () => (
    <div css={styles}>
        <div className="profile">
            <a href="https://www.instagram.com/ladysdoc/">
                <div className="avatar">
                    <i />
                </div>
            </a>
            <div className="title">ladysdoc</div>
            <div className="services">
                <b>Гинеколог+УЗИ Москва Коперская</b>
                {`
💯 План решения проблемы на первом приеме
💃 Здоровье и красота в 40 + Anti - age
☎️ Запись +7 (495) 638 - 70 - 70
⚡ Лазерное лечение
⭐ Интимные филлеры
                `}
            </div>
        </div>
    </div>
);
