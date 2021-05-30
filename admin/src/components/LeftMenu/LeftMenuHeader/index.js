import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';
import Logo from '../../../Logo';

const LeftMenuHeader = () => (
  <Wrapper>
    <Link to="/" className="leftMenuHeaderLink">
      <Logo color="white" size="small" />
    </Link>
  </Wrapper>
);

export default LeftMenuHeader;
