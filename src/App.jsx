import './App.css'
import { useState } from 'react'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'
import UpdateObjState from './UpdateObjState';
import UpdateArrayState from './UpdateArrayState';
import UseActionState from './UseActionState';

function App() {
    const [user, setUser] = useState();
    return (
        <div className="row">
            <div className="m-5 col">

                <UseActionState />

                {/*<UpdateArrayState />*/}

                {/*<UpdateObjState />*/}


                {/*<AddUser addUser={setUser} />*/}
                {/*<DisplayUser userName={user} />*/}
            </div>
        </div>
    )
}

export default App
