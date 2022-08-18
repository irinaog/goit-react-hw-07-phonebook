// import { useEffect} from "react";
import shortid from 'shortid';

import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactsList } from "./ContactsList/ContactList";
import { FilterContacts } from "./FilterContacts/FilterContacts";

import {  useDispatch } from "react-redux";
// import { addContact } from "Redux/phoneBookActions";
// import { fetchContacts } from 'Redux/phoneBookOperation';
import { addContact } from 'Redux/phoneBookSlice';
// import { fetchContacts } from 'Redux/phoneBookOperation';
import { useFetchContactsQuery } from 'Redux/contactsSlice'




export const App = () => {
  const dispath = useDispatch();
  // const contacts = useSelector(state => state.contacts.items);
  const { data } = useFetchContactsQuery();
  console.log(data)
  

  const formSubmitHandler = data => {
    
    if (data.find(contact => (data.name === contact.name))){
      alert(data.name + ' is already in contacts' )
    }
    else {
      dispath(addContact({ name:data.name, number:data.number, id: shortid() }))      
    }
  };

    return (
      <>
        <h1 className="headlineApp">Phonebook</h1>
        
        <FormAddContacts  onSubmit={formSubmitHandler}/>
       
        <FilterContacts
        />

        {data &&
          <>
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList contacts ={data} />
        </>
        }
      </>
    );
  
};