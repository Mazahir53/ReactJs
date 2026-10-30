import { useState } from "react"
import { Form } from 'react-bootstrap'
export default function UpdateObjState() {
    const [data, addData] = useState(
        {
            name: "AL-Azhar",
            info: {
                midName: 'Shabbirbhai',
                surname: 'Patrawala'
            }
        }
    )

    const updateName = (val) => {
        data.name = val;
        addData({ ...data })
    }

    const updatemiddleName = (mname) => {
        data.info.midName = mname;
        addData({ ...data, info: { ...data.info, mname } })
    }
    const updateSurnameName = (sname) => {
        data.info.surname = sname;
        addData({ ...data, info: { ...data.info,sname } })
    }

    return (
        <div>
            <h1 className="mb-4">Update Object in State</h1>
            <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(event) => updateName(event.target.value)}
            />

            <Form.Control
                type="text"
                placeholder="Enter Middle Name"
                onChange={(event) => updatemiddleName(event.target.value)}
                className="my-3"
            />

            <Form.Control
                type="text"
                placeholder="Enter Surname"
                onChange={(event) => updateSurnameName(event.target.value)}
            />

            <h2 className="mt-5 text-start">Name : {data.name}</h2>
            <h2 className="my-4 text-start">Middle Name : {data.info.midName}</h2>
            <h2 className="text-start">Suranam : {data.info.surname}</h2>
        </div>
    )
}