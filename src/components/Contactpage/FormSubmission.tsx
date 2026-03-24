'use client';
import { useState } from "react";

export default function FormSubmission() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: "success",
                    message: data.message || "Thank you! We’ll contact you shortly.",
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    organization: "",
                    message: "",
                });
            } else {
                setStatus({
                    type: "error",
                    message: data.message || "Something went wrong. Please try again.",
                });
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form className="contact-form-text-right" onSubmit={handleSubmit}>
                {status.message && (
                    <div className={`p-4 rounded mb-4 ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`} >
                        {status.message}
                    </div>)}

                <div className="cnct-form-row cnct-form-row-1" >
                    <input name="name" type="text" placeholder="Full Name" className="h6 text-rg" value={formData.name} onChange={handleChange}></input>
                    <input name="email" type="email" placeholder="Email Address" className="h6 text-rg" value={formData.email} onChange={handleChange}></input>
                </div>

                <div className="cnct-form-row cnct-form-row-2" >
                    <input name="organization" type="text" placeholder="Organization Name" className="h6 text-rg" value={formData.organization} onChange={handleChange}></input>
                </div>

                <div className="cnct-form-row cnct-form-row-3">
                    <textarea name="message" id="" placeholder="Your Message" className="h6 text-rg" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <div className="cnct-button-wrapper">
                    <button className='main-btn flex' disabled={isSubmitting}><span className='btn-icon bg-white centered-block' >
                        <svg className="cnct-svg-arrow b-arrw" width="24" height="24" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="black" />
                        </svg></span><span className='text-md text-white text-18'>{isSubmitting ? "Sending..." : "Send Message"}</span></button>
                </div>
            </form>
        </>
    );
}