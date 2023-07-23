export const sendEmailFormAsync = async (formData: FormData) => {
    try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            body: formData
        });
        console.log(res)
        return res

    } catch (err) {
        console.error("Error sending email", err)
    }

}

export const sendEmailTestAsync = (formData: FormData): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                message: "your email was sent",
                ok: true
            })
        }, 2000)
    })
}