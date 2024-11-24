import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
        return NextResponse.json(
            { message: 'Please Fill All Fields' },
            { status: 400 }
        );
    }
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Or any other service like Outlook
            auth: {
                user: process.env.EMAIL_USER, // Add your email in an environment variable
                pass: process.env.EMAIL_PASS // Add your email password in an environment variable
            },
            pool: true
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // Email recipient
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Error sending email' },
            { status: 500 }
        );
    }
}
