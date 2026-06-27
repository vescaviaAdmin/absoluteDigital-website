import React from 'react'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { industries } from '../data/siteContent'

const IndustriesPage = ({ navigate }) => {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Marketing and digital execution adapted to different business categories."
        description="Different industries have different buying cycles, trust triggers, and lead quality challenges. We tailor the channel mix and the messaging accordingly."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Get Industry-Specific Help <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <button type="button" onClick={() => navigate('/about')} className="cta-secondary">
              Learn About Us
            </button>
          </>
        }
        aside={
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.slice(0, 4).map((industry) => (
              <div key={industry.title} className="content-card !bg-white/85 dark:!bg-white/5">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{industry.title}</p>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{industry.text}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="page-shell mt-20">
        <SectionIntro eyebrow="Where We Fit Best" title="A practical mix of channel strategy, content, and conversion design for each sector." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="content-card">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{industry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{industry.text}</p>
              <div className="mt-5 h-2 w-16 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Use Case Fit</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">If your business needs better enquiries, trust, or digital presentation, we can build around that.</h2>
          </div>
          <button type="button" onClick={() => navigate('/contact')} className="cta-secondary border-white/20 bg-white text-primary">
            Request a Strategy Call
          </button>
        </div>
      </section>
    </>
  )
}

export default IndustriesPage
