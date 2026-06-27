import React from 'react'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { workHighlights } from '../data/siteContent'

const WorkPage = ({ navigate }) => {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio shaped by digital visibility, better presentation, and conversion intent."
        description="Here is a representative look at brands and businesses Absolute Digital has supported through design, digital marketing, and online growth execution."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Discuss a Similar Project <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <button type="button" onClick={() => navigate('/services')} className="cta-secondary">
              See Service Scope
            </button>
          </>
        }
        aside={<img src={assets.work_dashboard_management} alt="Client project dashboard" className="h-full w-full rounded-[2rem] object-cover" />}
      />

      <section className="page-shell mt-20">
        <SectionIntro eyebrow="Selected Projects" title="Recent work across healthcare, retail, e-commerce, and digital products." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workHighlights.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-primary/5 dark:border-white/10 dark:bg-white/5">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">{item.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.description}</p>
                <p className="mt-4 rounded-[1.2rem] bg-primary/6 px-4 py-3 text-sm leading-7 text-gray-700 dark:text-gray-200">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Build the Next One</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Need a stronger brand presentation, website, or campaign-led funnel?</h2>
          </div>
          <button type="button" onClick={() => navigate('/contact')} className="cta-secondary border-white/20 bg-white text-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  )
}

export default WorkPage
