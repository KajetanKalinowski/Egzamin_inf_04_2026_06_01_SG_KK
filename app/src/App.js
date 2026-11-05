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
        <FormGroup style={{marginTop:"10px"}} controlId="adres">
        <FormLabel htmlFor="adres">Adres WWW:</FormLabel>
        <FormControl id="adres" type='text' placeholder='Adres strony WWW' onChange={(e)=>{setAdres(e.target.value);setZapisane(false)}}/>
        </FormGroup>
        <FormGroup style={{marginTop:"10px"}} controlId="login">
        <FormLabel htmlFor="login">Login:</FormLabel>
        <FormControl id="login" type='text' placeholder='Twój login' onChange={(e)=>{setLogin(e.target.value);setZapisane(false)}}/>
        </FormGroup>
        <FormGroup style={{marginTop:"10px"}} controlId="haslo">
        <FormLabel style={{display:"flex",flexDirection:"row",gap:"4px"}}><FormCheck type='checkbox' defaultChecked={check} onChange={(e)=>{setCheck(e.target.checked);setZapisane(false)}}/>Wygeneruj hasło</FormLabel>
        <FormLabel htmlFor="haslo">Hasło:</FormLabel>
        <FormControl id="haslo" type='password' disabled={check} onChange={(e)=>{setHaslo(e.target.value);setZapisane(false)}}/>
        </FormGroup>
      </Form>
      <Button style={{marginLeft:"180px",marginTop:"10px"}} className='variant' onClick={()=>{setZapisane(true)}}>Zapisz</Button>
    {zapisane?<div>
      <p style={{color:"blue",padding:"0.5rem"}} className="lead text-primary">Adres: {adres}</p>
      <p style={{padding:"0.5rem"}} className="lead text-primary">Login: {login}</p>
      <p style={{padding:"0.5rem"}} className="lead text-primary">Hasło: {check?"Hasło automatycznie generowane":haslo}</p>
    </div>:<></>}

    </div>
  );
}

export default App;
