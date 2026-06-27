import React from 'react'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { productServices } from '../data/siteContent'

const ProductsPage = ({ navigate }) => {
  return (
    <>
      <PageHero
        eyebrow="Software Product Builder"
        title="Beyond marketing, we help shape digital products and growth-ready web experiences."
        description="Absolute Digital also works as a software product builder for businesses that need landing systems, MVPs, internal tools, and integrated digital experiences that support acquisition and operations."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Build With Us <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <button type="button" onClick={() => navigate('/work')} className="cta-secondary">
              View Product Work
            </button>
          </>
        }
        aside={<img src={assets.work_mobile_app} alt="Software product showcase" className="h-full w-full rounded-[2rem] object-cover" />}
      />

      <section className="page-shell mt-20">
        <SectionIntro eyebrow="Product Capabilities" title="Focused on launch speed, usability, and business alignment." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {productServices.map((item) => (
            <div key={item.title} className="content-card">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="content-card">
            <p className="eyebrow">Typical Use Cases</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">When product work and marketing need to support each other.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /><span>Lead capture platforms and campaign landing systems</span></li>
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /><span>Internal dashboards, service portals, and operator tools</span></li>
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /><span>Customer-facing product MVPs with launch support</span></li>
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary" /><span>Marketing analytics, tracking, and CRM-connected workflow setups</span></li>
            </ul>
          </div>
          <img src={assets.work_fitness_app} alt="Product experience example" className="h-full min-h-[320px] w-full rounded-[2rem] object-cover" />
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Launch Faster</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Need a landing system, MVP, or digital tool with marketing clarity built in?</h2>
          </div>
          <button type="button" onClick={() => navigate('/contact')} className="cta-secondary border-white/20 bg-white text-primary">
            Discuss Product Scope
          </button>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
