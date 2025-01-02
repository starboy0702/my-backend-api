const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' folder

// Connect to MongoDB
mongoose.connect('mongodb+srv://volttop7:kingkohli@cluster1.zw30b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
})
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define the schema for representatives
const representativeSchema = new mongoose.Schema({
  name: String,
  designation: String,
  phone: String,
  email: String
});

// Define the schema for locality (to group representatives by locality)
const localitySchema = new mongoose.Schema({
  locality: String,
  representatives: [representativeSchema]
});

// Create the model
const Representative = mongoose.model('Representative', localitySchema);

// Serve the index.html page on the home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the HTML page when visiting root
});

// GET route to fetch representatives for a specific locality
app.get('/representatives/:locality?', async (req, res) => {
    const locality = req.params.locality ? req.params.locality.trim().toLowerCase() : null;
    
    try {
      if (locality) {
        // Fetch representatives for the specific locality
        const localityData = await Representative.findOne({ locality: locality });
        if (localityData) {
          res.json(localityData.representatives);
        } else {
          res.json({ message: 'No representatives found for this locality.' });
        }
      } else {
        // Fetch all representatives from all localities
        const allRepresentatives = await Representative.find();
        if (allRepresentatives.length > 0) {
          const allData = allRepresentatives.map(localityData => localityData.representatives).flat();
          res.json(allData);
        } else {
          res.json({ message: 'No representatives found in any locality.' });
        }
      }
    } catch (err) {
      res.status(500).json({ message: 'Error fetching representatives', error: err });
    }
  });
  
  

// POST route to add a new representative to a locality
app.post('/representatives', async (req, res) => {
    const { locality, name, designation, phone, email } = req.body;
  
    // Validate that all required fields are present
    if (!locality || !name || !designation || !phone || !email) {
      return res.status(400).json({ message: 'All fields (locality, name, designation, phone, email) are required.' });
    }
  
    try {
      // Trim and format the locality to lowercase for consistency
      const formattedLocality = locality.trim().toLowerCase();
  
      // Find if the locality already exists in the database
      let localityData = await Representative.findOne({ locality: formattedLocality });
  
      if (localityData) {
        // Add a new representative to the existing locality
        localityData.representatives.push({ name, designation, phone, email });
        await localityData.save();
        res.json({ message: 'Representative added to existing locality!', data: localityData.representatives });
      } else {
        // Create a new locality and add the representative to it
        localityData = new Representative({
          locality: formattedLocality,
          representatives: [{ name, designation, phone, email }]
        });
        await localityData.save();
        res.json({ message: 'New locality created and representative added!', data: localityData.representatives });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error adding representative', error: err });
    }
  });
  
  
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});






