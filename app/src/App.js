import { useState } from 'react';
import './App.css';
import {Button, Form, FormCheck, FormControl, FormGroup, FormLabel} from "react-bootstrap"
function App() {
  const [check,setCheck] = useState(true)
  return (
    <div>
      <h1 style={{display:"flex",justifySelf:"center"}}>Menedżer haseł - wykonał 00000000000</h1>
      <Form style={{marginInline:"200px"}}>
        <FormGroup style={{marginTop:"10px"}}>
        <FormLabel>Adres WWW:</FormLabel>
        <FormControl type='text' placeholder='Adres strony WWW'/>
        </FormGroup>
        <FormGroup style={{marginTop:"10px"}}>
        <FormLabel>Login:</FormLabel>
        <FormControl type='text' placeholder='Twój login'/>
        </FormGroup>
        <FormGroup style={{marginTop:"10px"}}>
        <FormLabel style={{display:"flex",flexDirection:"row",gap:"4px"}}><FormCheck type='checkbox' defaultChecked={check} onChange={(e)=>{setCheck(e.target.checked)}}/>Wygeneruj hasło</FormLabel>
        <FormLabel>Hasło:</FormLabel>
        <FormControl type='password' disabled={check}/>
        </FormGroup>
      </Form>
      <Button style={{marginLeft:"180px",marginTop:"10px"}}>Zapisz</Button>
    </div>
  );
}

export default App;
