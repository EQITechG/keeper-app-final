import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Array to tate the note array from the CreateArea component
const [notes,setNotes]= useState([]);
//This function takes the one note from the CreateArea component, appends it to the previous notes already in the array if any
  function addNote(note){
    setNotes((prevNotes)=>{
      return [...prevNotes,note]
      
    })
  };
function handleDelete(id){
 setNotes(prevNotes=>{
    return prevNotes.filter((newNotes,index)=>{
      return index !== id;
    })
  })

}



  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
     {/* Here the map method is used to display the notes in the array according to the Notes.jsx component, the map requires a function, then it activates the note component and gives it the values it needs to display (note the differents when commenting on HTML side vs JS side */}
     {notes.map((allNotes,index)=>{
      return( <Note
      key={index} 
      id = {index} //in React the key is not used, it's best to declare it ad a seperate variable
      title={allNotes.title}      
      content={allNotes.content}
      onDelete={handleDelete}
      />
)
     
     })}
      <Footer />
    </div>
  );
}

export default App;
