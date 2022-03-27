import { useState ,useEffect} from 'react';
import NoteList from './components/NoteList';
import { nanoid } from 'nanoid';
import SearchNote from './components/SearchNote'
import Header from './components/Header'

const App = () =>{
  const [notes, setNotes] = useState([]);

  const addNote =(text) =>{
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text :text,
      date : date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }


  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) => note.id !==id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const savedItem = JSON.parse(localStorage.getItem('Notes-app-data'));
      if(savedItem){
        setNotes(savedItem)
      }
  }, [])

  useEffect(() => {
     localStorage.setItem('Notes-app-data',JSON.stringify(notes))
  }, [notes])

  return (
    <div className="container">
    <Header/>
    <SearchNote handlesearch = {setSearchText}/>
      <NoteList notes = {notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )} 
      handleAddNote ={addNote} handleDelNote = {deleteNote}/>
  </div>
  );
};

export default App;
