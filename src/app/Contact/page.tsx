import ContactForm from "@/components/Contactpage/ContactForm";
import ContactHero from "@/components/Contactpage/ContactHero";
import Header from "@/components/Header";
import { fetchGraphQL } from '@/lib/graphql';

type ContactpageData = {
    page: {
        contactpage: {
            contactHeroTitle: string;
            contactHeroSubtitle: string;

            contactFormTitle: string;
            contactFormSubtitle: string;
            contactFormDetailWrapper: {
                phoneTitle: string;
                phoneNumber: string;
                addressTitle: string;
                address: string;
                emailTitle: string;
                email: string;
            }
        }
    }
}
export default async function ContactPage() {

            const Contact = await fetchGraphQL<ContactpageData>(`
              query {
                  page (id : "/contact" , idType : URI) {
                      contactpage {
                          contactHeroTitle
                          contactHeroSubtitle
                          contactFormTitle
                          contactFormSubtitle
                          contactFormDetailWrapper {
                              phoneTitle
                              phoneNumber
                              addressTitle
                              address
                              emailTitle
                              email
                          }
                        }
                  }
              }
              `);
        
            const ContactFetch = Contact.page.contactpage;


    return (
        <>
            <Header />
            <ContactHero contactHeroTitle={ContactFetch.contactHeroTitle} contactHeroSubtitle={ContactFetch.contactHeroSubtitle} />
            <ContactForm contactFormTitle={ContactFetch.contactFormTitle} contactFormSubtitle={ContactFetch.contactFormSubtitle} contactFormDetailWrapper={ContactFetch.contactFormDetailWrapper} />
        </>
    );
}