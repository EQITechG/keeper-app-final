import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function handleClick(){
        return props.onDelete(props.id)
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
      onClick={handleClick}// initialy i didn't make a function for this and the codes was causing me problems, until i made a function for it.
      >
      <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
