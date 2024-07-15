import React from 'react';

import logo from '../img/logo-light.svg';

export const LogoLight: React.FC<React.ImgHTMLAttributes<{}>> = (props) => {
    return (
        <img src={logo} alt="logo" {...props} />
    );
}
