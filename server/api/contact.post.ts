import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'hillsideconsultancy@gmail.com',
        subject: `[Contact] ${subject || 'New enquiry from ' + name}`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    })

    if (error) {
        throw createError({ statusCode: 500, statusMessage: 'Failed to send email' })
    }

    return { success: true }
})