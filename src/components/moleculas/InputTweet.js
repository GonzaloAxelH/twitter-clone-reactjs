
import autosize from 'autosize';
import {useEffect,useRef,useState} from 'react';
import styled from 'styled-components';


const TextArea = styled.textarea`
  resize: none;
  outline:none;
  font-size: 20px;
  font-weight: 300;
  width: 100%;
  border:none;
`;


const InputTweet = ({onGetValue,value}) =>{
  const textTareaRef = useRef();
  useEffect(() => {
    var ta = textTareaRef.current;
    autosize(ta);
    
  });
  const onChange =()=> {
    onGetValue(textTareaRef.current.value,textTareaRef.current.value.length)  
  } 
  return  <TextArea 
     placeholder="What`s happening ? "
     ref={textTareaRef} 
     value={value}
     onChange={onChange}>
     </TextArea> 
}


export default InputTweet;
