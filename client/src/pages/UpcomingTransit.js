import React from "react";
import Select from 'react-select';
import { useState, useEffect } from "react";
import { StyledUpcomingTransit } from "../styles/UpcomingTransit.styled";
import './UpcomingTransit.css';

export default function UpcomingTransit() {
    const [stop, setStop] = useState('');
    const [stopNames, setStopNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNames = async () => {
            try {
                const response = await fetch('http://localhost:5290/3');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const formattedData = data.map(item => ({
                    label: item.stop_name,
                    value: item.stop_name
                }));

                setStopNames(formattedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchNames();
    }, []);

    if (loading) return "Loading";
    if (error) return <pre>{error.message}</pre>;

    const handleChange = selectedOption => {
        setStop(selectedOption ? selectedOption.value : '');
    };

    const getCurrentTime = () => new Date().toLocaleTimeString('en-GB', { hour12: false });

    const getCurrentDate = () => {
        const date = new Date();
        return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    };

    const encodeSlash = (input) => {
        return input.replace(/\//g, '%2F');
    };

    const handleUpcomingTransitSearch = async (e) => {
        e.preventDefault();

        console.log(stop, getCurrentDate(), getCurrentTime());
        const url = `http://localhost:5290/4/${encodeSlash(stop)}/${getCurrentDate()}/${getCurrentTime()}`;

        try {
            const res = await fetch(url, { method: "GET" });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log("Fetched data:", data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    return (
        <StyledUpcomingTransit className="container">

            <form>
                <div><label>Current Stop</label></div>
                <Select options={stopNames} placeholder={"Select a Stop"} onChange={handleChange} />
                <div><button type="submit" onClick={handleUpcomingTransitSearch}>Search</button></div>
            </form>
        </StyledUpcomingTransit>
    );
}
