import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #171d27;
    padding-left: 2rem;
    height: ${theme.main.sizes.leftMenu.height};

    .leftMenuHeaderLink {
      height: 100%;
      display: flex;
      align-items: center;

      &:hover {
        text-decoration: none;
      }
    }
  `}
`;

export default Wrapper;
