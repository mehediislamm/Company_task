import { useEffect, useState } from "react";



const AdvancedTables = () => {
    const [data, setDate] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setDate(data)
            })
    })

    return (
        <div>
            {
                data?.map(table => <div className="" key={table.id}>
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <th>ID</th>
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>phone Number</th>
                                    <th>age</th>
                                    <th>company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <label>
                                             <div>{table?.id} </div>
                                        </label>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className=" ">{table?.name}</div>
                                             
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {table?.phone_number}
                                    </td>
                                    <td>{table?.age}</td>
                                    <td>
                                          <div>{table?.company} </div>
                                    </td>
                                </tr>
                             
                            </tbody>

                        </table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AdvancedTables;