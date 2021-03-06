import React from 'react';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';

const ListItemWrapper = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  &: first-of-type {
    ${MediaQueries({ minWidth: 767 })} {
      display: none;
    }
  }

  &: nth-of-type(n + 4) {
    ${MediaQueries({ maxWidth: 767 })} {
      display: none;
    }
  }

  &: after {
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
`;

const ListItem = ({ children, ...props }) => {
  return <ListItemWrapper {...props}>{children}</ListItemWrapper>;
};

export default ListItem;
