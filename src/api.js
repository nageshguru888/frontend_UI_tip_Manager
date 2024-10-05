import axios from 'axios';

const API_URL = 'http://localhost:8000'; 


export const userCreateView = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data', 
        },
    };
    const response = await axios.post(`${API_URL}/user/`, formData, config);
    return response;
};


export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/user/login/`, credentials);
    return response;
};

export const calculateTip = async (tipData, token) => {
    const response = await axios.post(`${API_URL}/tip/calculate/`, tipData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};


export const getTipRecords = async (startDate, endDate, token) => {
    const response = await axios.get(`${API_URL}/tip?startDate=${startDate}&endDate=${endDate}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};
