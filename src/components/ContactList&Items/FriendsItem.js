import PropTypes from 'prop-types';

import { StyledFrendItem } from './FriendsItem.styled';

export const FriendItem = ({ children }) => {
  return <StyledFrendItem>{children}</StyledFrendItem>;
};

FriendItem.propTypes = {
  children: PropTypes.node.isRequired,
};
