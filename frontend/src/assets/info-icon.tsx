import styled from 'styled-components';

const StyledIconContainer = styled.div`
  height: 14px;
  width: 14px;
  min-width: 14px;
  border-radius: 50%;
  background-color: #dae0e7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InfoIcon = props => {
  return (
    <StyledIconContainer {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8.125" viewBox="0 0 8 8.125">
        <path
          d="M25.377 3.5a1.033 1.033 0 1 0 1.033 1.033A1.033 1.033 0 0 0 25.377 3.5zM24 6.6v1.375h.689v2.133H24v1.377h2.754v-1.376h-.689V6.6z"
          transform="translate(-21.246 -3.5)"
          style={{ fill: '#727d8e' }}
          data-name="icon/info"
        />
      </svg>
    </StyledIconContainer>
  );
};

export default InfoIcon;
