import React from 'react';

import logo from '../img/logo-dark.svg';

export const LogoDark: React.FC<React.ImgHTMLAttributes<{}>> = (props) => {
    return (
        <img src={logo} alt="logo" {...props} />
    );
}
