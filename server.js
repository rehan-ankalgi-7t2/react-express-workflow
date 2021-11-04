const express = require('express');

const App = express();
const port = 5000;

App.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Webster', lastName: 'Webs' },
        { id: 3, firstName: 'isabella', lastName: 'izzy' }
    ];

    res.json(customers);
});

App.listen(port, () => console.log('server started on port 5000...'));