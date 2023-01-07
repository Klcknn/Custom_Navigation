
## Shortly Notes:
* `window.history.pushState({} , "", "/contactpage");`

* `window.addEventListener("popstate", () => console.log("You are at the ", window.location.pathname, " web site"));`;
The same format
* `window.addEventListener("popstate", () => console.log("You are at the " + window.location.pathname + " web site"));`;

* absolute it means --> `position: absolute;` 
* inset-0 it means  --> `top: 0; left: 0; right: 0; 
*  

## Shorting Number:

    const data = [1,6,9,52];

    data.sort((a,b) => {
        return a-b;
    });

## Shorting String:

    const data = ["a","C","B","A","c","z"];

    data.sort((a,b) => {
        return a.localeCompare(b);
    });


## Shorting Objects:

    const data = [
        { name: "Tatto",  cost: 25 weight: 20 },
        { name: "Watermelon",  cost: 20 weight: 10 },
        { name: "Parrot", cost: 55 weight: 60 },
    ];

    function GetSortValue(value) {
        return value.cost;
    }

    

    data.sort((a,b) => { 
        valueA = GetSortValue(a);
        valueB = GetSortValue(b);
        return valueA- valueB;
    });


    function getSortValueString(value) {
        return value.name;
    }

    const sortOrder = "asc";
    data.sortString((a,b) => { 
        valueA = GetSortValueString(a);
        valueB = GetSortValueString(b);
        
        const reverseOrder = sortOrder === "asc" ? 1 : -1;

        if(typeof valueA === 'string') {
            return valueA.localeCompare(valueB) * reverseOrder ;
        }
        else {
            return (valueA- valueB) * reverseOrder;
        }
        
    });

## useReduce() :  

    import { useReducer } from 'react';

    function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
        age: state.age + 1
        };
    }
    throw Error('Unknown action.');
    }

    export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });

    return (
        <>
        <button onClick={() => {
            dispatch({ type: 'incremented_age' })
        }}>
            Increment age
        </button>
        <p>Hello! You are {state.age}.</p>
        </>
    );
    }
## immer :
install immer on your project open the terminal window and write below the code rows
`npm install immer`














