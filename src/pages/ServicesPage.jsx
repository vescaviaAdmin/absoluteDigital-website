import React from 'react'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { services } from '../data/siteContent'

const ServicesPage = ({ navigate }) => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Customized marketing and digital services built around business growth."
        description="Whether you need SEO, paid ads, social media, lead generation, a new website, or stronger brand communication, Absolute Digital develops a practical plan and executes it with clear goals."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Get a Custom Proposal <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <a href="https://wa.me/919304356329" target="_blank" rel="noreferrer" className="cta-secondary">
              WhatsApp Us
            </a>
          </>
        }
        aside={
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.slug} className="service-preview-card group">
                <div className="service-preview-media">
                  <img src={service.image} alt={service.title} className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="px-2 pb-2 pt-3 text-sm font-medium text-gray-800 dark:text-white">{service.title}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="page-shell mt-20">
        <SectionIntro
          eyebrow="Service Breakdown"
          title="Each service line is designed to support visibility, conversion, or both."
          description="The goal is to build a connected growth system rather than isolated activity."
        />
        <div className="mt-10 grid gap-5">
          {services.map((service) => (
            <div key={service.slug} className="service-detail-card group grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="service-media rounded-[1.6rem]">
                  <img src={service.image} alt={service.title} className="h-[11rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-[13rem]" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-primary">Service</p>
                <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{service.title}</h2>
                <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="content-card !p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What We Offer</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content-card !p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Outcomes</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {service.outcomes.map((outcome) => (
                      <span key={outcome} className="rounded-full bg-primary px-4 py-2 text-sm text-white">
                        {outcome}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    We shape recommendations around your business stage, offer, sales cycle, and local or national growth priority.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Need Direction?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Not sure which service mix fits your business?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              We can help identify whether your immediate bottleneck is traffic, conversion, positioning, content, or funnel setup.
            </p>
          </div>
          <button type="button" onClick={() => navigate('/contact')} className="cta-secondary border-white/20 bg-white text-primary">
            Request an Audit
          </button>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
