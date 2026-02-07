'use client';

import ContactForm from "@/components/Contactpage/ContactForm";
import ContactHero from "@/components/Contactpage/ContactHero";
import Header from "@/components/Header";

export default function ContactPage() {
    return (
        <>
            <Header />
            <ContactHero />
            <ContactForm />
        </>
    );
}