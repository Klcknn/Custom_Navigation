import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) { 
    const { config , data } = props;  // there are props 
    const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config);
    
    const UpdateConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
    
        return {
            ...column,
            header: () => (
                <th onClick={() => handleClick(column.name)} className="cursor-pointer hover:bg-gray-200">
                    <div className="flex items-center">
                        {getIcons(column.name , sortBy, sortOrder)}
                        {column.name}
                    </div>
                </th>
            ),
        }
    });
  
    return (
        <Table {...props} config={UpdateConfig} data={sortedData}/> 
        /*   
        <div>
            {sortOrder} - {sortBy} 
            <Table {...props} config={UpdateConfig} data={sortedData}/>;
        </div>  
        */
    ); 
}

function getIcons(name, sortBy, sortOrder) {
    if(name !== sortBy){
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
        //return "show us both icons...";
    }

    if(sortOrder === null){
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallUp />
            </div>
        );
        //return "show us both icons...";
    }
    else if(sortOrder === "asc"){
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );
        //return "show us up icons...";
    }
    else if(sortOrder === "desc"){
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
        //return "show us down icons...";
     }
}

export default SortableTable;