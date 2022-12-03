import PropTypes from 'prop-types';
import { StyledInputTitle } from './Title.styled';

export const FormTitle = ({ title, children }) => {
  return (
    <StyledInputTitle>
      {title}
      {children}
    </StyledInputTitle>
  );
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};