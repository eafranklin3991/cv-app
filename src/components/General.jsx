import { useState } from 'react'

function General() {
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState({
        name: "Bob",
        email: "bob@email.com",
        phone: "555-555-5555",
    });

    const handleChange = (e) => {
        setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(prev => !prev);
    };

    const form = (
        <form>
            <label htmlFor="name">Name: </label><br />
            <input type="text" name="name" id="name" value={fields.name}/><br />

            <label htmlFor="email">Email: </label><br />
            <input type="email" name="email" id="email" value={fields.email}/><br />

            <label htmlFor="phone">Phone: </label><br />
            <input type="tel" name="phone" id="phone" value={fields.phone}/><br />
        </form>
    );

    const locked = (
        <div>
            <p><strong>Name: </strong> {fields.name}</p>
            <p><strong>Email: </strong> {fields.email}</p>
            <p><strong>Phone: </strong> {fields.phone}</p>
        </div>
    );

    return (
        <div>
            <h1>General</h1>
            <div className="content">
                {isEditing ? form : locked}
            </div>
            <button onClick={handleSubmit}>
                {isEditing ? "Submit" : "Edit"}
            </button>
        </div>
    );
}

export default General;