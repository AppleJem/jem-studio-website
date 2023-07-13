export const sendEmailFormAsync = async (formData: FormData) => {
    try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            body: formData
        });
        console.log(res)
        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.error("Error sending email", err)
    }


}