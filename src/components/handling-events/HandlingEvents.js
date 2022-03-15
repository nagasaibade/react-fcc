import React from "react";
function onClickMethod() {
    alert('Hey You clicked the button....!!!!!');
}
function onCopyMethod() {
    alert('Hey You copied the data :)');
}

function onCutMethod() {
    alert('Hey You cut the data :)');
}
function onPasteMethod() {
    alert('Hey You Pasted the data :)');  
}//onKeyDownMethod
function onKeyDownMethod(e) {
    alert(e.key);  
    alert('is Meta Key :'+e.metaKey)
}//onMouseOver

function onMouseOver(e) {
    //alert(e);  
    alert('Mouse overed on something')
}//onMouseOver

function HandlingEvents() { 

    const style ={
        border : '10px',
        borderStyle : 'solid',
        borderColor: 'green'
    }
        
        return(
            <div>
                <button onClick={onClickMethod}>OnClick</button>
                <p onCopy={onCopyMethod} >Copy the text to test the event handlings.</p>
                <p onCut={onCutMethod} >Cut the text to test the event handlings.</p>

                <input style={style} type="text" placeholder="Paste some text here to see magic :)" onPaste={onPasteMethod}></input>
            &nbsp;
                <input style={style} type="text" placeholder="press down arrow key here to see magic :)" onKeyDown={(e) => onKeyDownMethod(e)} onMouseOver={onMouseOver}></input>  


            </div>
        )    


}

export default HandlingEvents