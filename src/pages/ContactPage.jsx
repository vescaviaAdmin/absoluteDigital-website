import React from 'react'
import assets from '../assets/assets'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import { companyProfile, contactReasons } from '../data/siteContent'

const ContactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to grow, fix, or launch."
        description="If you need better traffic, more qualified leads, a stronger website, or support building a digital product, send the details and Absolute Digital will get back to you."
        actions={
          <>
            <a href={companyProfile.whatsapp} target="_blank" rel="noreferrer" className="cta-primary">
              WhatsApp Us <img src={assets.arrow_icon} alt="" className="w-4" />
            </a>
            <a href={`mailto:${companyProfile.email}`} className="cta-secondary">
              Email Directly
            </a>
          </>
        }
        aside={
          <div className="content-card">
            <p className="eyebrow">Contact Details</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
              <p>{companyProfile.address}</p>
              <p>{companyProfile.phone}</p>
              <p>{companyProfile.email}</p>
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-primary/6 p-4">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Good fit if you are trying to:</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {contactReasons.map((reason) => (
                  <li key={reason} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />

      <section className="page-shell mt-20 pb-4">
        <ContactForm />
      </section>
    </>
  )
}

export default ContactPage
