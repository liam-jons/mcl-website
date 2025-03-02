// This is a simple API endpoint for the contact form
// In a production environment, you would want to integrate with a proper email service
// like SendGrid, Mailgun, or AWS SES, and implement proper validation and rate limiting

export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get form data from request body
  const { email, interests, message } = req.body;

  // Validate form data
  if (!email || !interests || !interests.length) {
    return res.status(400).json({ error: 'Email and at least one interest are required' });
  }

  // Here you would typically send an email or store the contact request in a database
  // For now, we'll just log it to the console (in a real app, add your email logic here)
  console.log('Contact form submission:', { email, interests, message });

  // Return success response
  return res.status(200).json({ success: true, message: 'Message received successfully' });
}
