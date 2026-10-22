import { useState } from 'react';
import './App.css';
import {Button, Form, FormCheck, FormControl, FormGroup, FormLabel} from "react-bootstrap"
// nazwa funkcji: App
// opis funkcji: główna funkcja wykonująca program
// parametry: brak
// zwracany typ i opis: brak
// autor: 12345678901
function App() {
  const [check,setCheck] = useState(true)
  const [adres,setAdres] = useState("")
  const [login,setLogin] = useState("")
  const [haslo,setHaslo] = useState("")
  const [zapisane,setZapisane] = useState(false)
  return (
    <div>
      <h1 style={{display:"flex",justifySelf:"center"}}>Menedżer haseł - wykonał 00000000000</h1>
      <Form style={{marginInline:"200px"}}>
        <FormGroup style={{marginTop:"10px"}}>
        <FormLabel>Adres WWW:</FormLabel>
        <FormControl type='text' placeholder='Adres strony WWW' onChange={(e)=>{setAdres(e.target.value);setZapisane(false)}}/>
        </FormGroup>
        <FormGroup style={{marginTop:"10px"}}>
        <FormLabel>Login:</FormLabel>
        <FormControl type='text' placeholder='Twój login' onChange={(e)=>{setLogin(e.target.value);setZapisane(false)}}/>
        </FormGroup>
        <FormGroup style={{marginTop:"10px"}}>
        <FormLabel style={{display:"flex",flexDirection:"row",gap:"4px"}}><FormCheck type='checkbox' defaultChecked={check} onChange={(e)=>{setCheck(e.target.checked);setZapisane(false)}}/>Wygeneruj hasło</FormLabel>
        <FormLabel>Hasło:</FormLabel>
        <FormControl type='password' disabled={check} onChange={(e)=>{setHaslo(e.target.value);setZapisane(false)}}/>
        </FormGroup>
      </Form>
      <Button style={{marginLeft:"180px",marginTop:"10px"}} onClick={()=>{setZapisane(true)}}>Zapisz</Button>
    {zapisane?<div>
      <p style={{color:"blue",padding:"0.5rem"}}>Adres: {adres}</p>
      <p style={{padding:"0.5rem"}}>Login: {login}</p>
      <p style={{padding:"0.5rem"}}>Hasło: {check?"Hasło automatycznie generowane":haslo}</p>
    </div>:<></>}

    </div>
  );
}

export default App;
