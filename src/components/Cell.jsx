import React, { useEffect, useState } from 'react'
import './Cell.css'
export default function Cell({data, objKey, updateValue, additionalInfo}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(data);
  useEffect(()=>{
    setValue(data);
  },[data])
  const handleChange= (e)=>{
     setValue(e.target.value);
  }
  const onClickedOnSpan = (e)=>{
    setEditing(true);
  }
  const onBlur = (e)=>{
    hasNewValue(value)
  }
  const onKeyUpOnInput = (e)=>{
    if(e.key === 'Enter'){
       hasNewValue(value)
    }
  }
  const hasNewValue = (val)=>{
       setEditing(false);
       updateValue({objKey, value: val, additionalInfo})
  }
  if(editing){
    return <input value={value} onChange={handleChange} onBlur={onBlur} onKeyUp={onKeyUpOnInput} autoFocus/>
  }

  return <span onClick={onClickedOnSpan}>
    {data}
    </span>
  
}
