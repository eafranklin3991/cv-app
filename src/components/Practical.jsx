import { useState } from 'react'

function Practical() {
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState({
        company: "University of Georgia",
        position: "Data Analyst",
        responsibilities: ["cleaning data", "analyzing data", "visualizing data"],
        startDate: "July 2018",
        endDate: "Present",
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
            <label htmlFor="name">Company: </label><br />
            <input type="text" name="company" id="company" value={fields.company} onChange={handleChange} /><br />

            <label htmlFor="position">Position Title: </label><br />
            <input type="text" name="position" id="position" value={fields.position} onChange={handleChange} /><br />

            <label htmlFor="responsibilities">Responsibilities: </label><br />
            <textarea name="responsibilities" id="responsibilities" value={fields.responsibilities} onChange={handleChange} /><br />

            <label htmlFor="startDate">Start Date: </label><br />
            <input type="text" name="startDate" id="startDate" value={fields.startDate} onChange={handleChange} /><br />

            <label htmlFor="endDate">End Date: </label><br />
            <input type="text" name="endDate" id="endDate" value={fields.endDate} onChange={handleChange} />
        </form>
    );

    const locked = (
        <div>
            <p><strong>Company: </strong> {fields.company}</p>
            <p><strong>Position Title: </strong> {fields.position}</p>
            <p><strong>Responsibilities: </strong> {fields.responsibilities.join(", ")}</p>
            <p><strong>Start Date: </strong> {fields.startDate}</p>
            <p><strong>End Date: </strong> {fields.endDate}</p>
        </div>
    );

    return (
        <div>
            <div className="section-header">
                <h2>Practical Experience</h2>
                <button onClick={handleSubmit}>
                    {isEditing ? "Submit" : "Edit"}
                </button>
            </div>
            <div className="content">
                {isEditing ? form : locked}
            </div>
        </div>
    );
}

export default Practical;