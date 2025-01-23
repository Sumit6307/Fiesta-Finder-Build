import mailjet from 'node-mailjet';

const sendEmail = async ({ to, subject, text }) => {
    const client = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

    const request = client.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: { Email: 'sumitkesar6307@gmail.com', Name: 'Fiesta Finder' },
                To: [{ Email: to }],
                Subject: subject,
                TextPart: text, // Plain text body
                HTMLPart: text, // HTML body (if you want to include a link)
            },
        ],
    });

    try {
        const result = await request;
        console.log('Email sent successfully:', result);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};

export default sendEmail;
