import React, { useState } from "react";

export default function QRCodeGenerator() {
    const [userInput, setUserInput] = useState("engineersurajsahani");
    const [linkData, setLinkData] = useState(null);

    async function handleAPI() {
        const APIURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput;
        setLinkData(APIURL);
        console.log("linkdata ", linkData);
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
                    placeholder="Enter data for QR code" 
                />
            </div>
            <button onClick={handleAPI} className="btn btn-primary mb-3">Generate QR Code</button>

            {linkData && (
                <div className="card mt-3">
                    {linkData && (
                        <img 
                            src={linkData} 
                            width={150} 
                            height={150} 
                            className="mt-3 card-img-top" 
                            alt="QR Code" 
                        />
                    )}
                    <div className="card-body">
                        <a href={linkData} download="qr-code.png" className="btn btn-primary">Download</a>
                    </div>
                </div>
            )}
        </div>
    );
}