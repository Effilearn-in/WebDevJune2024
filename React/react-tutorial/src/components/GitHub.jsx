import React, { useState } from "react";

export default function GitHub() {
    const [userInput, setUserInput] = useState("engineersurajsahani");
    const [githubData, setGitHubData] = useState(null);

    async function handleAPI() {
        const APIURL = "https://api.github.com";
        const response = await fetch(`${APIURL}/users/${userInput}`);
        const json = await response.json();
        console.log(json);
        setGitHubData(json);
    }

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <label htmlFor="userInput" className="form-label">Username</label>
                <input 
                    type="text" 
                    id="userInput" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    className="form-control" 
                    placeholder="Enter GitHub username" 
                />
            </div>
            <button onClick={handleAPI} className="btn btn-primary mb-3">Search</button>

            {githubData && (
                <div className="card mt-3">
                    {githubData.avatar_url && (
                        <img 
                            src={githubData.avatar_url} 
                            width={100} 
                            height={400} 
                            className="mt-3 card-img-top" 
                            alt={`Avatar of ${githubData.login}`} 
                        />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{githubData.name || githubData.login}</h5>
                        <p className="card-text">
                            <strong>Username:</strong> {githubData.login}<br />
                            <strong>Company:</strong> {githubData.company || "N/A"}<br />
                            <strong>Location:</strong> {githubData.location || "N/A"}<br />
                            <strong>Bio:</strong> {githubData.bio || "N/A"}<br />
                            <strong>Public Repositories:</strong> {githubData.public_repos}<br />
                            <strong>Public Gists:</strong> {githubData.public_gists}<br />
                            <strong>Followers:</strong> {githubData.followers}<br />
                            <strong>Following:</strong> {githubData.following}<br />
                            <strong>Created at:</strong> {new Date(githubData.created_at).toLocaleDateString()}<br />
                            <strong>Updated at:</strong> {new Date(githubData.updated_at).toLocaleDateString()}<br />
                            <strong>GitHub Profile:</strong> <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
