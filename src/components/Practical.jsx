import { useState } from 'react'
import '../styles/Practical.css'

function Practical() {
    const [isEditing, setIsEditing] = useState(false);
    const [companies, setCompanies] = useState([
        {
            id: 1,
            name: "University of Georgia",
            position: "Data Analyst",
            responsibilities: ["Cleaning data", "Analyzing data", "Visualizing data"],
            startDate: "July 2018",
            endDate: "Present"
        },
    ]);

    const handleChange = (id) => (e) => {
        setCompanies(prev => prev.map(company =>
            company.id === id
                ? { ...company, [e.target.name]: e.target.value }
                : company
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(prev => !prev);
    };

    const form = companies.map(company => (
        <form key={company.id} className="company">
            <label htmlFor="name">Company: </label><br />
            <input type="text" name="name" id="name" value={company.name} onChange={handleChange} /><br />

            <label htmlFor="position">Position Title: </label><br />
            <input type="text" name="position" id="position" value={company.position} onChange={handleChange} /><br />

            <label htmlFor="responsibilities">Responsibilities: </label><br />
            <textarea name="responsibilities" id="responsibilities" value={company.responsibilities} onChange={handleChange} /><br />

            <label htmlFor="startDate">Start Date: </label><br />
            <input type="text" name="startDate" id="startDate" value={company.startDate} onChange={handleChange} /><br />

            <label htmlFor="endDate">End Date: </label><br />
            <input type="text" name="endDate" id="endDate" value={company.endDate} onChange={handleChange} />
        </form>
    ));

    const locked = companies.map(company => (
        <div key={company.id} className="company">
            <p><strong>Company: </strong> {company.name}</p>
            <p><strong>Position Title: </strong> {company.position}</p>
            <p><strong>Responsibilities: </strong> {company.responsibilities.join(", ")}</p>
            <p><strong>Start Date: </strong> {company.startDate}</p>
            <p><strong>End Date: </strong> {company.endDate}</p>
        </div>
    ));

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