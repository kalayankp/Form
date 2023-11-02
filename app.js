const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/my-form-builder-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/forms', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
