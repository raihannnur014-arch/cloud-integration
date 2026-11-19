const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Cloud Integration API');
});

app.get('/api/data', (req, res) => {
    res.json({
        status: 'success',
        message: 'Data berhasil diakses',
        source: 'Cloud Application'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
