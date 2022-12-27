import { useDispatch, useSelector } from 'react-redux';
import { StyledList } from './FriendsList.styled';
import { FriendItem } from './FriendsItem';
import { Button } from 'components/Button/Button';
import { FriendDescription } from './FriendsItem.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contactList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <FriendItem key={id}>
          <FriendDescription>
            {name}: {number}
          </FriendDescription>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            text="Delete"
          />
        </FriendItem>
      ))}
    </StyledList>
  );
};
