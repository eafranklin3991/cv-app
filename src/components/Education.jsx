import { useState } from 'react'

function Education() {
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState({
        school: "Emory University",
        study: "English and Creative Writing",
        graduationDate: "May 2011",
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
            <label htmlFor="name">School: </label><br />
            <input type="text" name="school" id="school" value={fields.school} onChange={handleChange} /><br />

            <label htmlFor="study">Title of Study: </label><br />
            <input type="text" name="study" id="study" value={fields.study} onChange={handleChange} /><br />

            <label htmlFor="graduationDate">Graduation Date: </label><br />
            <input type="text" name="graduationDate" id="graduationDate" value={fields.graduationDate} onChange={handleChange} /><br />
        </form>
    );

    const locked = (
        <div>
            <p><strong>School: </strong> {fields.school}</p>
            <p><strong>Title of Study: </strong> {fields.study}</p>
            <p><strong>Graduation Date: </strong> {fields.graduationDate}</p>
        </div>
    );

    return (
        <div>
            <div className="section-header">
                <h2>Education</h2>
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

export default Education;