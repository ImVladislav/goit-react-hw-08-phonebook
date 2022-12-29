
import { Title } from './TitleApp&Section/TitleApp';
import { ContactForm } from './ContactForm/ContactForm';
import { SectionTitle } from './TitleApp&Section/TitleSection';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList&Items/FriendsList';
import { Box } from './Box';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <Box maxWidth="1000px" my={0} mx="auto" px={4}>
      <Title text="Phonebook" />
      <ContactForm />
      <SectionTitle text="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Box>
  );
};
