import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import "./NoteForm.css";
 import { notificationSelector,  resetNotification } from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch=useDispatch();

  const message=useSelector(notificationSelector);
  if(message){
    setTimeout(()=>{
      dispatch(resetNotification());
    },2000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(NoteText);
 
    setNoteText("");
    dispatch(noteActions.add(noteText));
   
  };

  return (
    <div className="container">
      {message&&
       <div className="alert alert-success" role="alert">
       {message}
     </div>}
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
