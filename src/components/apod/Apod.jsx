import { useState, useEffect } from "react";
import "./Apod.css";
import CircularProgress from '@mui/material/CircularProgress';

function ApodCard({ title, explanation, url }) {
    return (
        <div className="card">
            <h3 className="apod-title">{title}</h3>
            <p className="apod-explanation">{explanation}</p>
            <img src={url} alt={title} className="apod-image" />
        </div>
    )
}

function Apod () {
    const API_URL= "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [apod, setApod] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setApod(data);
            } catch(err) {
                console.error("Failed to fetch APOD data", err);
            }
        };
            fetchData();
            
    },    []);

    return (
        <div className="apod-container">
            {! apod ? (
                <CircularProgress sx={{ color: "#271084" }} />
            ) : (
                <ApodCard {...apod} />
                
            )}
        </div>
    );
}

export default Apod;