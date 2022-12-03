import PropTypes from 'prop-types';
import { StyledTitle } from './TitleSection.styled';

export const SectionTitle = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};