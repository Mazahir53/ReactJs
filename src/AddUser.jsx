import { Form } from 'react-bootstrap'

function AddUser({ addUser}) {
    return (
        <div>
            <h2 className="mb-4 text-start">Lifting/Sharing State between Component</h2>
            <Form.Control
                type="text"
                id="inpUser"
                aria-describedby="inpUserBlock"
                placeholder="Enter User Name in componant 1"
                onChange={(event) => addUser(event.target.value)}
            />

        </div>
    )
}

export default AddUser