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
app.get('/api/hybrid-data', async (req, res) => {
    try {
        const response = await fetch(
            `${process.env.LOCAL_API_URL}/api/local-data`
        );

        if (!response.ok) {
            throw new Error('Local API tidak merespons');
        }

        const data = await response.json();

        res.json({
            status: 'success',
            integration: 'Hybrid Cloud',
            local_data: data
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
