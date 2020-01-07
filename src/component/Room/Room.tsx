import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { postResponse, getResponse } from '../../util/api';

export interface RoomFields{
    name : string,
    cardScheme: "regular" | "fibonnaci"| "custom",
    scheme:string,
    timeout: number
}

const Room = (props: RouteComponentProps<{}>, formfields: RoomFields)=> {
 
const [name, setName] = React.useState(formfields.name);
const [cardScheme, setCardScheme] = React.useState("")
const [scheme, setScheme] = React.useState('custom scheme')
const [timeout, setTimeout] = React.useState(0)


function sendRoom(event: any){
   // event.preventDefault();
    postResponse('http://localhost:3000/room', {
            name,
            cardScheme,
            scheme,
            timeout
        })
        console.log('ok')      
    }


 function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
}

function handleChangeCardScheme(event: React.ChangeEvent<HTMLInputElement>) {
    setCardScheme(event.target.value) 
}

function handleCustomInput(event:React.ChangeEvent<HTMLInputElement>){
    setScheme(event.target.value)
}

function handleChangeTimeOut(event: React.ChangeEvent<HTMLInputElement>){
     setTimeout(event.target.valueAsNumber)
}

return(
    <div>
        <h1>New room settings</h1>
        <label>Room name
        <input className="name" type="text" id="name" value={name} onChange={handleChangeName}/>
        </label>
        <br/>
        <h4>CardSchemes:</h4>
        <label>Regular
            <input className="regular" name="cardScheme" type="radio" id="regular" value="regular" checked onChange={handleChangeCardScheme}></input>
        </label>
        <br/>
        <label>Fibonacci
            <input className="fibonacci" name="cardScheme" type="radio" id='fibonacci' value="fibonacci" onChange={handleChangeCardScheme} ></input>
        </label>
        <br/>
        <label>Custom
            <input className="custom" name="cardScheme" type="radio" id ="custom>" value="custom" onChange={handleChangeCardScheme}/>
        </label>
        <br/>
        {cardScheme === "custom" ? <input name="customOptions" type="text" value={scheme} onChange={handleCustomInput}/>
        : ""}
        <br/>
        <label>Session timeout
            <input className="timeout" type="number" id="timeout" value={timeout} onChange={handleChangeTimeOut}/>
        </label>
        <button id="create" onClick={sendRoom}>Create room</button>
        
    </div>
)}


export default Room

