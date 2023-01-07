//import UseCounter from "../hooks/use-hook";
//import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE = "change-value";
const ADD_VALUE = "add-value";

const reducer = (state , action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case CHANGE_VALUE:
            return {
                ...state,
                valuetoAdd: action.payload,
            };
        case ADD_VALUE:
            return {
                ...state,
                count: state.count + state.valuetoAdd,
                valuetoAdd: 0
            };
        default:
            return state;
    }


   /*  
   if(action.type === INCREMENT_COUNT){
        return {
            ...state,
            count: state.count + 1,
        };
    }
    else if(action.type === DECREMENT_COUNT){
        return {
            ...state,
            count: state.count - 1,
        };
    }
    else if(action.type === CHANGE_VALUE){
        return {
            ...state,
            valuetoAdd: action.payload,
        };
    }    
    else if(action.type === ADD_VALUE){
        return {
            ...state,
            valuetoAdd: action.payload,
        };
    }
    return state;
   */
};

function CounterPage( {initialCount} ) {
    //const [count, setCount] = useState(initialCount);
    //const [valuetoAdd, setValuetoAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer , {
        count: initialCount,
        valuetoAdd: 0,
    });
    console.log(state); // Show us state objects

    //const { count, increment } = UseCounter(initialCount);
    const increment = () => {
        dispatch({type: INCREMENT_COUNT});
        //setCount(count + 1);
    };

    const decrement = () => { 
        dispatch({type: DECREMENT_COUNT});
        //setCount(count - 1);
    };

    const handleChanged = (event) => { 
        const get_value = parseInt(event.target.value) || 0 ; // String Convert to number with use parseInt()
        dispatch({
            type: CHANGE_VALUE,
            payload: get_value
        });
        
        //console.log(typeof get_value); // show us type of the get_value
        //setValuetoAdd(get_value);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        dispatch({
            type: ADD_VALUE
        });
        //setCount(count + valuetoAdd);
        //setValuetoAdd(0);
    };

    return (
        <div>
            <h1 className="flex items-center justify-center bg-gray-500 p-4 m-4 text-white border border-gray-700 w-full text-2xl hover:bg-black">
                Count is 
                <p className="p-2 text-white text-orange-500">{state.count}</p>
                {/* <p className="p-2 text-white text-orange-500">{count}</p> */}
            </h1>
            <div className="flex flex-row items-center justify-center">
                <Button success onClick={increment}>
                    Increment
                </Button>
                <Button danger onClick={decrement}>
                    Decrement
                </Button>
            </div>
            <form action="" onSubmit={handleSubmit} className="flex flex-col items-center">
                <label htmlFor="">Add a lot</label>
                <input type="number" value={state.valuetoAdd || ""} onChange={handleChanged} className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                {/* <input type="number" value={valuetoAdd || ""} onChange={handleChanged} className="p-1 m-3 bg-gray-50 border border-gray-300"/> */}
                <Button success>Add It</Button>
            </form>
        </div>
    );
}

export default CounterPage;