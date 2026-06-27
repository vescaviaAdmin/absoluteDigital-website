import React from 'react'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { companyProfile, services } from '../data/siteContent'

const ServicesPage = ({ navigate }) => {
  const serviceRail = [...services, ...services]

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Customized marketing and digital services built around business growth."
        description="Whether you need SEO, paid ads, social media, lead generation, a new website, stronger brand communication, or product support, Absolute Digital develops a practical plan and executes it with clear goals."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Get a Custom Proposal <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <a href={companyProfile.whatsapp} target="_blank" rel="noreferrer" className="cta-secondary">
              WhatsApp Us
            </a>
          </>
        }
        aside={
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.slug} className="service-preview-card group">
                <div className="service-preview-media">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="px-2 pb-2 pt-3 text-sm font-medium text-gray-800 dark:text-white">{service.title}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="page-shell mt-20">
        <SectionIntro
          eyebrow="Service Showcase"
          title="Browse the full service stack horizontally, then pause on what matters."
          description="The rail moves automatically when idle. Hover or focus on any card to stop the motion and explore the full service details directly inside the rail."
        />

        <div className="services-showcase-shell mt-10">
          <div className="services-showcase-track">
            {serviceRail.map((service, index) => (
              <article
                key={`${service.slug}-${index}`}
                tabIndex={0}
                className="services-showcase-card services-showcase-detail-card group"
              >
                <div className="grid gap-4 md:grid-cols-[15rem_minmax(0,1fr)] md:items-start">
                  <div className="service-media rounded-[1.6rem]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[9rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] md:h-full md:min-h-[11.5rem]"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">Service</p>
                    <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white sm:text-[1.75rem]">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{service.short}</p>
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="content-card !p-4">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">What We Offer</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-5 text-gray-600 dark:text-gray-300">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="content-card !p-4">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">Business Outcomes</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.outcomes.map((outcome) => (
                        <span key={outcome} className="rounded-full bg-primary px-3 py-1.5 text-xs text-white">
                          {outcome}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-5 text-gray-600 dark:text-gray-300">
                      We shape recommendations around your business stage, offer, sales cycle, market, and digital maturity so the service mix is commercially relevant.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Need Direction?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Not sure which service mix fits your business?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              We can help identify whether your immediate bottleneck is traffic, conversion, positioning, content, funnel setup, or product execution.
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
