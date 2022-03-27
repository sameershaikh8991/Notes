import { useState } from 'react'; 


const AddNote = ({handleAddNote}) =>{
	const [noteText, setNoteText] = useState('');
	const charLimit =200;

	const handleChange = (event) =>{
		if(charLimit - event.target.value.length >= 0){
			setNoteText(event.target.value);
		}
		else{
			alert("Text linit reach..")
		}
		
	}
	const handlesaveClick =() => {
		if(noteText.trim().length >0){
			handleAddNote(noteText);
			setNoteText('')
		}
		else{
			alert("please type in note to save")
		}
	};

	
	return  (
		<div className='note new'>
		<textarea rows='8' cols ='10' 
			placeholder="type your Note..."
			value = {noteText}
			onChange = {handleChange}
			></textarea>
		<div className='note-footer'>
			<small>{ charLimit - noteText.length}  remaning</small>
			<button className="save" onClick={handlesaveClick}>save</button>
		</div>
	</div>
	);
};

export default AddNote; 
