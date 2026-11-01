const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to My Server');
});

// About route
app.get('/about', (req, res) => {
    res.json({
        message: 'Welcome to About Page',
        name: 'Akash',
        section: 'AIML-2B'
    });
});

// Time route
app.get('/time', (req, res) => {
    res.send('Current Date and Time: ' + new Date().toString());
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Express server running on port 3000');
});
