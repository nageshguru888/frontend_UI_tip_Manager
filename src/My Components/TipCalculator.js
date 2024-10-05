import React, { useState } from 'react';
import { calculateTip } from '../api';

const TipCalculator = () => {
    const [user, setUser] = useState('');
    const [place, setPlace] = useState('');
    const [total_amount, setTotalAmount] = useState('');
    const [tip_percentage, setTipPercentage] = useState('');
    const [tip_amount, setTipAmount] = useState(null);

    const handleCalculate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await calculateTip({ user, place, total_amount, tip_percentage }, token);
            setTipAmount(response.data.tip);
        } catch (error) {
            alert('Error calculating tip.');
        }
    };

    return (
        <div>
            <h2>Calculate Tip</h2>
            <form onSubmit={handleCalculate}>
                <input type="text" placeholder="User" required onChange={(e) => setUser(e.target.value)} />
                <input type="text" placeholder="Place" required onChange={(e) => setPlace(e.target.value)} />
                <input type="number" placeholder="Total Amount" required onChange={(e) => setTotalAmount(e.target.value)} />
                <input type="number" placeholder="Tip Percentage" required onChange={(e) => setTipPercentage(e.target.value)} />
                <button type="submit">Calculate</button>
            </form>
            {tip_amount !== null && <h3>Tip Amount: {tip_amount}</h3>}
        </div>
    );
};

export default TipCalculator;
