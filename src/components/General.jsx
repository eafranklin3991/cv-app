import { useState } from 'react'

function General() {
    const [stateValue, setStateValue] = useState("locked");

    const onEditClick = () => {
        setStateValue(prev => prev === "locked" ? "edit" : "locked");
    };

    const form = (
        <form>
            <label htmlFor="name">Name: </label><br />
            <input type="text" name="name" id="name" /><br />

            <label htmlFor="email">Email: </label><br />
            <input type="email" name="email" id="email" /><br />

            <label htmlFor="phone">Phone: </label><br />
            <input type="tel" name="phone" id="phone" /><br />
        </form>
    );

    return (
        <div>
            <h1>General</h1>
            <div className="content">
                {stateValue === "edit" ? form : "Hi"}
            </div>
            <button onClick={onEditClick}>
                {stateValue === "locked" ? "Edit" : "Submit"}
            </button>
        </div>
    );
}

export default General;