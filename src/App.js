import React, { useEffect, useState } from "react"; 
import { useCookies } from "react-cookie"; 
function App() { 
  const [text, setText] = useState(''); 
  const [isRemember, setIsRemember] = useState(false); 
  const [cookies, setCookie, removeCookie] = useCookies(['rememberText']); 
  
  let now = new Date; 
  let after1m = new Date(); 
  
  useEffect(() => { 
    if (cookies.rememberText !== undefined) { 
      setText(cookies.rememberText); 
      setIsRemember(true); 
    } 
  }, []); 
  
  function onChange(e) { 
    setText(e.target.value); 
  } 
  
  const handleOnChange = () => { 
    after1m.setMinutes(now.getMinutes() + 1); 
    setIsRemember(true); 
    setCookie('rememberText', text, { path: '/', expires: after1m });
    window.location.reload();
  } 

  const removeremove = () => {
    removeCookie('rememberText');
    window.location.reload();
  }
    
  return (
      <> 
        <input value={text} onChange={onChange} /> 
        <button onClick={() => { handleOnChange() }}>아이디 저장해보자</button>
        <button onClick={() => { removeremove() }}>아이디 지워보자</button>
        {/* <input type="checkBox" onChange={handleOnChange} checked={isRemember} />  */}
        <h1>{text}</h1> 
      </>
    ); 
  }

export default App;