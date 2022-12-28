import { useState, useEffect, useRef } from "react";
import { GoTriangleDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown( {options, value, onChange} ) {
    const [isOpen, setIsOpen] = useState(false);
    const divEL = useRef();    
    
    useEffect(() => {
        const handler = (event) => {
            //console.log(event.target);
            //console.log(divEL.current);
            if(!divEL.current.contains(event.target)){ 
                setIsOpen(false);
            }
        };   
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handleClick = () => { 
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (sendvalue) => { 
        //console.log("You are clicked items" , sendvalue);
        setIsOpen(false);
        onChange(sendvalue);
        //console.log("You are clicked items " + sendvalue);
    };

    const renderedOptions = options.map( (option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-2" onClick={()=>handleOptionClick(option)} key={option.value}> {option.label} </div>
        );
    });

   /*    
   let content = "Select...";
   if(selection){  //if is selection value not null when updated content value
    content = selection.label;  
   }  
   */ 

   return (
        <div ref={divEL} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || "Select..."}
                <GoTriangleDown className="text-lg"/>
            </Panel>            
            {isOpen && <Panel className="absolute top-ful">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;