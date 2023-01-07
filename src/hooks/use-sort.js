import { useState } from "react";
function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    
    const handleClick = (name_value) => {
        if(sortBy && name_value !== sortBy){
            setSortOrder("asc");
            sortBy(name_value);
            return;
        }

        if(sortOrder === null){
            setSortOrder("asc");
            setSortBy(name_value);
        }
        else if(sortOrder === "asc"){
            setSortOrder("desc");
            setSortBy(name_value);
        }
        else if(sortOrder === "desc"){ 
            setSortOrder(null);
            setSortBy(null);
        }
        //console.log(name_value);
    };

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the "data" prop
    // Find the correct sortValue function and use it for sorting
    
    let sortedData = data;
    if (sortOrder && sortBy) {  // if sortOrder and sortBy is not null then go on ? 
       const { sortValue } = config.find((column) => column.name === sortBy);
       sortedData = [...data].sort((a,b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);
        const reverseOrder = sortOrder === "asc" ? 1 : -1;
        if(typeof valueA === "string"){
            return valueA.localeCompare(valueB) * reverseOrder;
        }
        else{
            return (valueA - valueB) * reverseOrder;
        }
       }) 
    }
    return {
        sortOrder,
        sortBy,
        sortedData,
        handleClick,
    };
}

export default useSort;