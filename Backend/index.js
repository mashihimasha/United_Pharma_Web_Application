const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let data = [
    { id: 100, name: 'Amoxolline', email: 'Box', phone: '50.00' },
    { id: 101, name: 'Paracetamol', email: 'Box', phone: '100.00' },
    { id: 102, name: 'Dexa', email: 'Box', phone: '200.00' },
    { id: 103, name: 'Pyridoxin', email: 'Box', phone: '175.00' },
    { id: 104, name: 'Azythromycin', email: 'Box', phone: '115.00' },
    { id: 105, name: 'Betadin', email: 'Bottle', phone: '127.00' },
    { id: 106, name: 'Panadiene', email: 'Box', phone: '175.00' },
    { id: 107, name: 'Cephalexin', email: 'Box', phone: '65.00' },
    { id: 108, name: 'Metformin', email: 'Box', phone: '15.00' },
    { id: 109, name: 'Citrazin', email: 'Box', phone: '205.00' },
    { id: 110, name: 'Xanax', email: 'Box', phone: '325.00' },
    { id: 111, name: 'Gabapentin', email: 'Box', phone: '1000.00' },
    { id: 112, name: 'Augmentin', email: 'Box', phone: '54.00' }
];

// Retrieve all data
app.get('/retrieve', (req, res) => {
    res.json(data);
});

// Create new data
app.post('/create', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).json(newData);
});

// Update existing data
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    const dataIndex = data.findIndex(item => item.id == id);
    if (dataIndex !== -1) {
        data[dataIndex] = { ...data[dataIndex], ...newData };
        res.json(data[dataIndex]);
    } else {
        res.status(404).send('Data not found');
    }
});

// Delete data
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const dataIndex = data.findIndex(item => item.id == id);
    if (dataIndex !== -1) {
        data.splice(dataIndex, 1);
        res.send('Data deleted successfully');
    } else {
        res.status(404).send('Data not found');
    }
});

const port = 4000;
app.listen(port, () => {
    console.log("Server is started");
});