// import { useEffect} from "react";
import shortid from 'shortid';

import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactsList } from "./ContactsList/ContactList";
import { FilterContacts } from "./FilterContacts/FilterContacts";

import { useSelector,useDispatch } from "react-redux";
import { addContact } from "Redux/phoneBookActions";
// import { itemsReducer } from "Redux/store";



export const App = () => {

  const dispath = useDispatch();
  const contacts = useSelector(state => state.items);
  

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts)) 
  // }, [contacts]);


  const formSubmitHandler = data => {
    
    if (contacts.find(contact => (data.name === contact.name))){
      alert(data.name + ' is already in contacts' )
    }
    else {
      dispath(addContact({ name:data.name, number:data.number, id: shortid() }))
      console.log(contacts)
      
    }
  };

    return (
      <>
        <h1 className="headlineApp">Phonebook</h1>
        
        <FormAddContacts  onSubmit={formSubmitHandler}/>
       
        <FilterContacts
        />

        {contacts.length > 0 &&
          <>
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList />
        </>
        }
      </>
    );
  
};