import { useState } from 'react'

function General() {
    const stateValues = ["locked", "edit"];

    const [stateValue, setStateValue] = useState("locked");

    const onEditClick = (state) => () => {
        setStateValue(state);

        const contentContainer = document.querySelector(".content");

        contentContainer.innerHTML = state === "locked" ? form : "";

        stateValue = "edit";
    };

    const form = <>
        <form action="">
            <label htmlFor="name">Name: </label><br />
            <input type="text" name="name" id="name" /><br />

            <label htmlFor="email">Email: </label><br />
            <input type="email" name="email" id="email" /><br />

            <label htmlFor="phone">Phone: </label><br />
            <input type="tel" name="phone" id="phone" /><br />

            <input type="submit" value="Submit" />
        </form>
    </>

    return (
        <div>
            <h1>General</h1>
            <div className="content">Hi</div>
            <button onClick={onEditClick(stateValue)}>Edit</button>
        </div>
    );
}

export default General;