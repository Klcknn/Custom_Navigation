//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        {name:"Orange", color:"bg-orange-500", score: 5},
        {name:"Apple", color:"bg-red-500", score: 25},
        {name:"Lime", color:"bg-green-500", score: 76},
        {name:"Banana", color:"bg-yellow-500", score: 50},
    ];

    const config = [
        {
            name:"Fruits",
            render: (fruit) => fruit.name, 
            sortValue: (fruit) => fruit.name,
        },
        {
            name:"Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
            //render: (fruit) => fruit.color,
        },
        {
            name:"Score",
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
            //header: () => <th className="bg-red-500">Score</th>,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;