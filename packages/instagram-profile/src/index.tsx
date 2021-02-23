import { Global, css, jsx } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { Fragment } from 'react';
import { render } from 'react-dom';

import { ProfilePage } from './components/ProfilePage/ProfilePage';
import globalStyles from './styles/global';

render(
    <Fragment>
        <Global
            styles={css`
                ${emotionNormalize}
            `}
        />
        <Global styles={globalStyles} />
        <ProfilePage />
    </Fragment>,
    document.getElementById('root'),
);
