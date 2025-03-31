// src/pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, interests, message } = req.body;
    
    // Get interest labels from IDs
    const interestOptions = [
      { id: 'production-support', label: 'Production Support Services' },
      { id: 'ai-consultancy', label: 'AI Consultancy' },
      { id: 'ai-readiness', label: 'AI Readiness Assessment' },
      { id: 'neuroinclusive', label: 'Creating a Neuroinclusive Environment' },
      { id: 'development', label: 'Software Development' },
      { id: 'testing', label: 'Quality Assurance & Testing' },
      { id: 'strategic', label: 'Strategic IT Consulting' },
    ];
    
    const interestLabels = interests.map(id => 
      interestOptions.find(option => option.id === id)?.label || id
    );
    
    // Validate input
    if (!email || !interests || !interests.length) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and interests are required'
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Format interests as a list
    const interestsHtml = interestLabels.map(interest => `<li>${interest}</li>`).join('');
    
    // Construct email content
    const mailOptions = {
      from: `"MCL Website" <${process.env.SMTP_USER}>`,
      to: process.env.DEFAULT_RECIPIENT || 'liam.jons@masonconsulting.com',
      replyTo: email,
      subject: 'New Contact Form Submission - MCL Website',
      text: `
        New inquiry from: ${email}
        
        Areas of Interest:
        ${interestLabels.join(', ')}
        
        Message:
        ${message || 'No message provided'}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        
        <p><strong>Areas of Interest:</strong></p>
        <ul>
          ${interestsHtml}
        </ul>
        
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
}