// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection (use your MongoDB URL or set up a local MongoDB instance)
mongoose.connect('mongodb://localhost:27017/fruit-ai', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"));

// Define Schema and Model for FAQ
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Faq = mongoose.model('Faq', faqSchema);

// CRUD Routes for FAQ

// GET all FAQs
app.get('/faqs', async (req, res) => {
  const faqs = await Faq.find();
  res.json(faqs);
});

// GET FAQ by ID
app.get('/faqs/:id', async (req, res) => {
  const faq = await Faq.findById(req.params.id);
  res.json(faq);
});

// POST create new FAQ
app.post('/faqs', async (req, res) => {
  const faq = new Faq(req.body);
  await faq.save();
  res.json(faq);
});

// PUT update FAQ by ID
app.put('/faqs/:id', async (req, res) => {
  const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(faq);
});

// DELETE FAQ by ID
app.delete('/faqs/:id', async (req, res) => {
  await Faq.findByIdAndDelete(req.params.id);
  res.json({ message: 'FAQ deleted' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
