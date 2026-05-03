export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    // TODO: Wire up email sending (e.g. nuxt-resend, nodemailer, Postmark)
    // Example with nuxt-resend:
    //   1. Add nuxt-resend to dependencies and 'nuxt-resend' to nuxt.config modules
    //   2. Set RESEND_API_KEY in your .env
    //   3. Replace the log below with:
    //
    //   const { emails } = useResend()
    //   await emails.send({
    //     from: 'noreply@hillsidestudio.com.au',
    //     to: ['hillsideconsultancy@gmail.com'],
    //     subject: `New enquiry from ${name}`,
    //     html: `<p><strong>${name}</strong> (${email})</p><p>${message}</p>`,
    //   })

    console.log('[contact] New submission:', { name, email, message })

    return { success: true }
})
