import { Fragment } from "react"; // we are using React fragment here because Error: "validateDOMNesting(...): <div> cannot appear as a child of <tr>."

function Table( {data, config, keyFn} ) {
    
    const renderedDataRows = data.map((new_data) => {
        const renderedCells = config.map((column) => {
           return <td className="p-3" key={column.name}>{column.render(new_data)}</td>;
        });

        return (
            <tr className="border-b" key={keyFn(new_data)}>
                {/* 3. Step : */}
                {renderedCells}
                {/* 2. Step : 
                    <td className="p-3">{config[0].render(new_data)}</td>
                    <td className="p-3">{config[1].render(new_data)}</td>
                    <td className="p-3">{config[2].render(new_data)}</td>
                */}
                {/* 1. Step :
                    <td className="p-3">{new_data.name}</td> 
                    <td className="p-3">{new_data.color}</td> 
                    <td className="p-3">
                        <div className={`p-3 m-2 ${new_data.color}`}></div>
                    </td> 
                    <td className="p-3">{new_data.score}</td>
                */}
            </tr>
        );
    });

    const renderedDataHeader = config.map((column) => {
        if(column.header){
            return <Fragment key={column.name}>{column.header()}</Fragment>; // The error message solved by the fragment 
            // return <div key={column.name}>{column.header()}</div>; 
        }
        return <th key={column.name}> {column.name} </th>;
    });

    return (
        //<div>{data.length}</div>
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedDataHeader}
                    {/* 
                    <th>Fruit</th>
                    <th>Color</th>
                    <th>Score</th> 
                    */}
                </tr>
            </thead>
            <tbody>
                {renderedDataRows}
            </tbody>
        </table>
    );
}

export default Table; 