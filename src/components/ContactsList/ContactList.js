import { ContactsListItem } from "components/ContactsListItem/ContactListItem";
import css from './ContactsList.module.css';
// import { useSelector } from "react-redux";

export const ContactsList = ({contacts}) => {
    // const contacts = useSelector(state => state.contacts.items);
    // const filter = useSelector(state => state.contacts.filter);
    console.log('list', contacts)
    // const getFilterContacts = () => {
    //     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    // };

    return (
        
        <ul className={css.contactList}>
            {/* {filter === '' ? */}
               { contacts.map(({ name, phone, id }) => (
                <ContactsListItem key={id} name={name} number={phone} id={id} />
                )) }   
            {/* :
                getFilterContacts().map(({ name, id, number }) =>
                    <ContactsListItem key={id} name={name} number={number} id={id} />
                )} */}
          
        </ul>
    )
};

// ContactsList.propTupes = {
//     contacts:Prop
// }