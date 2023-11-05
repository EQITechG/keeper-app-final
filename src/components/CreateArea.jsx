import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
//First the usestate will be used to capture an array of title and content, currently set to empty strings
const [note,setNote]= useState({
    title:"",
    content:""
});

const [isExpanded,setExpanded]=useState(false);

//This function gets the value of both event targets and attaches it to the value according to the name of the input, value below has array.value. An alternative will be to do two seperate functions for two seperate use states.
function handleChange(event){
    const {name,value} = event.target
    setNote((prevNote)=>{
        return {
            ...prevNote,
            [name]: value //* 
        };
        
    });

};
   //On clicking the add button it calls a function in the app component and supplies it with the array of titles and contents. The reason this is done on this level rather that on the button element below is so code can be added to prevent react from refreshing the page when add button is clicked as per React default behaviour. Also to be able to reset the title and content forms to empty strings
function handleAdd(event){
    event.preventDefault();
    props.onAdd(note)
    setNote({
        title:"",
        content:""
    })
   

}


function handleExpand(){
    setExpanded(true);
}


  return (
    <div>
      <form className="create-note">
      {/* Below, the title input only expands when the state of isExpanded is set to true, by default, it is set to false, but when trggered by handleExpand function, which is triggered by clicking of the content input, then it appears. */}

      {isExpanded && <input 
        onChange={handleChange}
        name="title" 
        placeholder="Title" 
        value={note.title}
        />}
        

        <textarea 
        onChange={handleChange}
        onClick={handleExpand} //This was added later in the code to enable the title input expand also the rows of the text area
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded ? "3":"1"}
        value={note.content}

        />
        <Zoom in={isExpanded}>
        <Fab
        onClick={handleAdd}>
        <AddIcon />
        </Fab> 
        </Zoom>
        {/* Fab button and Zoom components used from material UI, instead of normal button */}
      </form>
    </div>
  );
}

export default CreateArea;
