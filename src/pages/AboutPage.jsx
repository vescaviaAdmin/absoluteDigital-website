import React from 'react'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { aboutStory, companyProfile, differentiators, galleryImages, processSteps, teamSnapshot } from '../data/siteContent'

const AboutPage = ({ navigate }) => {
  return (
    <>
      <PageHero
        eyebrow="About Absolute Digital"
        title="A growth partner built around modern marketing and digital execution."
        description="Absolute Digital helps businesses strengthen their online presence, generate leads, improve brand perception, and launch digital experiences that support long-term growth."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Discuss Your Goals <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <button type="button" onClick={() => navigate('/work')} className="cta-secondary">
              View Our Work
            </button>
          </>
        }
        aside={
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <img key={image + index} src={image} alt="Absolute Digital showcase" className={`rounded-[1.8rem] object-cover ${index === 0 ? 'sm:col-span-2 h-56' : 'h-44'}`} />
            ))}
          </div>
        }
      />

      <section className="page-shell mt-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro eyebrow="Who We Are" title={aboutStory.heading} description={aboutStory.body} />
          <div className="content-card">
            <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
              We support startups, local businesses, educational institutions, healthcare providers, real estate companies, and e-commerce brands with strategies designed around real commercial outcomes. The work spans search, paid media, content, websites, branding, and software-enabled customer journeys.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Our approach stays practical: understand the business, identify the growth constraint, and deploy the right mix of creative, marketing, and product execution.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro eyebrow="How We Operate" title="The team works across strategy, campaigns, creative, and product delivery." description="That combination lets us build cleaner marketing systems and better digital customer experiences." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {teamSnapshot.map((member) => (
            <div key={member.name} className="content-card">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Team</p>
              <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro eyebrow="Process" title="How projects move from idea to measurable execution" description="We keep communication direct and the execution accountable." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="content-card">
              <p className="text-4xl font-semibold text-primary/20">0{index + 1}</p>
              <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro eyebrow="Why Clients Choose Us" title="Direct thinking, custom strategy, and execution that respects the numbers." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="content-card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Partner With Us</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Need an agency that can handle both growth channels and digital builds?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{companyProfile.promise}</p>
          </div>
          <button type="button" onClick={() => navigate('/contact')} className="cta-secondary border-white/20 bg-white text-primary">
            Start the Conversation
          </button>
        </div>
      </section>
    </>
  )
}

export default AboutPage
