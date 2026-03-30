import { useState } from 'react'
import '../styles/Education.css'

function Education() {
    const [isEditing, setIsEditing] = useState(false);
    const [schools, setSchools] = useState([
        { id: 1, name: "Emory University", type: "Undergraduate", study: "B.A. English and Creative Writing", graduationDate: "May 2011" },
        { id: 2, name: "Georgia State University", type: "Graduate", study: "M.A. Economics", graduationDate: "May 2018" },
    ]);

    const handleChange = (id) => (e) => {
        setSchools(prev => prev.map(school =>
            school.id === id
                ? { ...school, [e.target.name]: e.target.value }
                : school
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(prev => !prev);
    };

    const form = schools.map(school => (
        <form key={school.id} className="school">
            <label htmlFor="name">School: </label><br />
            <input type="text" name="name" id="name" value={school.name} onChange={handleChange} /><br />

            <label htmlFor="type">Type: </label><br />
            <input type="text" name="type" id="type" value={school.type} onChange={handleChange} /><br />

            <label htmlFor="study">Title of Study: </label><br />
            <input type="text" name="study" id="study" value={school.study} onChange={handleChange} /><br />

            <label htmlFor="graduationDate">Graduation Date: </label><br />
            <input type="text" name="graduationDate" id="graduationDate" value={school.graduationDate} onChange={handleChange} /><br />
        </form>
    ));

    const locked = schools.map(school => (
        <div key={school.id} className="school">
            <p><strong>School: </strong> {school.name}</p>
            <p><strong>Type: </strong> {school.type}</p>
            <p><strong>Title of Study: </strong> {school.study}</p>
            <p><strong>Graduation Date: </strong> {school.graduationDate}</p>
        </div>
    ));

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