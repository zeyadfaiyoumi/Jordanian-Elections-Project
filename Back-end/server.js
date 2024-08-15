const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userAuthRoutes = require('./routes/userAuthroutes'); // Ensure this file exists and is correctly named
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/userAuth', userAuthRoutes); // Ensure this line is present and correct

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
