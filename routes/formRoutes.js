const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const Response = require('../models/Response');

// Create a new form
router.post('/create', async (req, res) => {
  try {
    const { title, questions } = req.body;
    const newForm = new Form({ title, questions });
    const savedForm = await newForm.save();
    res.status(201).json(savedForm); // 201 status code indicates resource created
  } catch (error) {
    res.status(500).json({ error: 'Unable to create a new form' });
  }
});

// Get all forms
router.get('/all', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve forms' });
  }
});

// Submit a response to a form
router.post('/submit', async (req, res) => {
  try {
    const { formId, responses } = req.body;

    // Create a new Response instance
    const newResponse = new Response({
      formId,
      responses,
    });

    // Save the response to the database
    const savedResponse = await newResponse.save();

    // Respond with a success message and the saved response
    res.status(201).json({
      message: 'Response submitted successfully',
      response: savedResponse,
    });
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ error: 'Unable to submit response' });
  }
});

module.exports = router;
