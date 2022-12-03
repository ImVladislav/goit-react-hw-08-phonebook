import PropTypes from 'prop-types';
import { StyledList } from './FriendsList.styled';
import { FriendItem } from './FriendsItem';
import { StyledButton } from 'components/ContactForm/Button.styled';
import { FriendDescription } from './FriendsItem.styled';

export const ContactList = ({ list, onFriendDelete }) => {
  return (
    <StyledList>
      {list.map(({ id, name, number }) => (
        <FriendItem key={id}>
          <FriendDescription>
            {name}: {number}
          </FriendDescription>
          <StyledButton type="button" onClick={() => onFriendDelete(id)}>
            Delete
          </StyledButton>
        </FriendItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onFriendDelete: PropTypes.func.isRequired,
};