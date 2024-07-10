import { useState } from "react";

export default function PlanTrip() {
    const [leavingDay, setLeavingDay] = useState('');
    const [fromPoint, setFromPoint] = useState('');
    const [toPoint, setToPoint] = useState('');

    const handleRouteSearch = async (e) => {
        e.preventDefault();
        console.log("searching routes...");
    }
    return (
        <form className="container py-3">
            <div className="py-2"><label>Leaving Day</label></div>
            <div className="pb-3"><input type="date" value={leavingDay} onChange={(e) => setLeavingDay(e.target.value)} /></div>
            <div className="py-2"><label>From</label></div>
            <div><input type="text" value={fromPoint} placeholder="station/stop" onChange={(e) => setFromPoint(e.target.value)} required /></div>
            <div className="py-2"><label>To</label></div>
            <div className="pb-3"><input type="text" value={toPoint} placeholder="station/stop" onChange={(e) => setToPoint(e.target.value)} required /></div>
            <div><button type="submit" onClick={handleRouteSearch}>Search</button></div>
        </form>
    );
}