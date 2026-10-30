import { useState } from "react"
import { Form } from 'react-bootstrap'
export default function UpdateArrayState() {
    const [data, addData] = useState([
        "AL-Azhar", 'Shabbirbhai', 'Patrawala'
    ])

    const [dataDetails, addDatadetails] = useState([
        { name: 'Azhar', age: '32' },
        { name: 'Husain', age: '5' },
        { name: 'Ali', age: '32' }
    ])

    const updateLastName = (val) => {
        data[data.length - 1] = val;
        addData([...data])
    }

    const updateDataDetails = (age) => {
        dataDetails[dataDetails.length - 1].age = age;
        addDatadetails([...dataDetails])
    }


    return (
        <div>
            <h1 className="mb-4">Update Array in State</h1>
            <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={(event) => updateLastName(event.target.value)}
            />
            {
                data.map((name, index) => (
                    <h2 key={index} className="mt-5 text-start">{name}</h2>
                ))
            }

            <hr />
            <Form.Control
                type="text"
                placeholder="Enter Last Age"
                onChange={(event) => updateDataDetails(event.target.value)}
            />
            {
                dataDetails.map((items, index) => (
                    <div className="d-flex justify-content-between col-3">
                        <h2 key={index} className="mt-5 text-start d-inline">{items.name}</h2>
                        <h2 className="mt-5 text-start  d-inline">{items.age}</h2>
                    </div>
                ))
            }
        </div>
    )
}