import React, { useEffect, useState } from 'react';
import { getTipRecords } from '../api';

const TipRecords = () => {
    const [records, setRecords] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const fetchRecords = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await getTipRecords(startDate, endDate, token);
            setRecords(response.data);
        } catch (error) {
            alert('Error fetching records.');
        }
    };

    return (
        <div>
            <h2>Tip Records</h2>
            <input type="text" placeholder="Start Date (dd-mm-yyyy)" onChange={(e) => setStartDate(e.target.value)} />
            <input type="text" placeholder="End Date (dd-mm-yyyy)" onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={fetchRecords}>Get Records</button>
            <ul>
                {records.map((record, index) => (
                    <li key={index}>
                        {record.place}: {record.totalAmount} - Tip: {record.tipAmount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TipRecords;
