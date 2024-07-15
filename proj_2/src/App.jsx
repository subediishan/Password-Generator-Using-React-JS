import './App.css';
import { useState,useCallback,useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isCharactersIncluded,setIsCharactersIncluded]=useState(false);
  const [isNumbersIncluded,setIsNumbersIncluded]=useState(false);
  const[passwordTxt,setPasswordTxt]=useState("slide to set random password");


const labelChange=(event)=>{
  setLength(event.target.value)

}
const chars =()=>{
 setIsCharactersIncluded(!isCharactersIncluded);
}

const number = () =>{
 setIsNumbersIncluded(!isNumbersIncluded);
}
const password = useCallback(()=>{
let pass =""
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const numb="0123456789"
const chars = "!@#$%^&*()_+"
if(isCharactersIncluded){
  str +=chars;
}
if(isNumbersIncluded){
  str+=numb;
}
for(let i=0;i<length;i++){
  pass+=str.charAt(Math.floor(Math.random()*str.length));

}
setPasswordTxt(pass);



},[length,isCharactersIncluded,isNumbersIncluded]);

useEffect(()=>{
    password()
},[length,isCharactersIncluded,isNumbersIncluded,password]);

const copyToClipboard =()=>{
  navigator.clipboard.writeText(passwordTxt)
  alert("password copied !");
}

  return (
    <>
      <div className="container">
        <h1>Random Password Generator</h1>
        <div className="upper">
        <input type="text" value={passwordTxt} id="pass" readOnly/>
        <button onClick={copyToClipboard} id='btn'>Copy</button>

        </div>
       <div className="lower">
       <input type="range" name='range' value={length} max={50} min={1} onChange={labelChange}/>
       <label htmlFor="range">length : {length}</label>

        <input type="checkbox" name='specialCharacters' onChange={chars} />
        <label htmlFor="specialCharacters">Special Characters</label>
        <input type="checkbox" name = "numbers" onChange={number}/>
        <label htmlFor="numbers">Numbers</label>
       </div>
      
        
      </div>
    </>
  )
}

export default App
