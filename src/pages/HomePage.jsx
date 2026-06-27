import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import {
  companyProfile,
  differentiators,
  faqs,
  heroStats,
  homeHighlights,
  industries,
  metrics,
  processSteps,
  services,
  trustedLogos,
  workHighlights,
} from '../data/siteContent'

const HomePage = ({ navigate }) => {
  const serviceRail = [...services, ...services]

  return (
    <>
      <PageHero
        eyebrow="Absolute Digital"
        title="Digital marketing services that drive real business growth."
        description="Transform your business with result-driven digital marketing, conversion-focused websites, and product-minded execution. Absolute Digital helps brands attract the right audience at the right time and convert that attention into revenue."
        actions={
          <>
            <button type="button" onClick={() => navigate('/contact')} className="cta-primary">
              Book a Strategy Call <img src={assets.arrow_icon} alt="" className="w-4" />
            </button>
            <button type="button" onClick={() => navigate('/services')} className="cta-secondary">
              Explore Services
            </button>
          </>
        }
        aside={
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-primary/10 dark:border-white/10 dark:bg-white/5">
              <img src={assets.hero_img} alt="Digital marketing showcase" className="h-64 w-full rounded-[1.5rem] object-cover sm:h-72" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="page-shell mt-18">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="content-card">
            <p className="eyebrow">Growth Focus</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">Built to make marketing useful to the business, not just visible.</h2>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">{companyProfile.promise}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {homeHighlights.map((item) => (
              <div key={item} className="content-card">
                <div className="h-2 w-14 rounded-full bg-primary" />
                <p className="mt-5 text-base leading-7 text-gray-700 dark:text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro
          eyebrow="Trusted By"
          title="Brands and businesses we have supported"
          description="From local businesses to healthcare and product-led companies, we build work that is practical, sharp, and growth-oriented."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustedLogos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="content-card flex h-32 items-center justify-center"
            >
              <img src={logo.src} alt={logo.name} className="max-h-16 w-full object-contain" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro
          eyebrow="Services"
          title="A complete digital growth stack under one roof"
          description="Absolute Digital combines strategy, execution, reporting, and creative direction across performance marketing, websites, and digital products."
        />
        <div className="service-marquee-shell mt-10">
          <div className="service-marquee-track">
            {serviceRail.map((service, index) => (
              <motion.button
                key={`${service.slug}-${index}`}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                onClick={() => navigate('/services')}
                className="service-card group service-marquee-card text-left"
              >
                <div className="service-media">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{service.short}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.outcomes.map((outcome) => (
                    <span key={outcome} className="rounded-full bg-primary/8 px-3 py-1 text-xs text-primary">
                      {outcome}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button type="button" onClick={() => navigate('/services')} className="cta-secondary">
            View All Service Details
          </button>
        </div>
      </section>

      <section className="page-shell mt-22">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="How We Work"
            title="A simple process that stays focused on results"
            description="We keep strategy grounded in business goals, then execute across the funnel with measurable checkpoints."
          />
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="content-card flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-22">
        <div className="grid gap-5 rounded-[2.4rem] bg-gray-950 px-6 py-8 text-white shadow-2xl shadow-primary/15 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro
          eyebrow="Featured Work"
          title="Recent projects and client-facing digital experiences"
          description="A sample of the brands we have helped through creative direction, online visibility, and product-minded execution."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workHighlights.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-primary/5 dark:border-white/10 dark:bg-white/5">
              <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">{item.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro
          eyebrow="Industries"
          title="Solutions adapted to your business model"
          description="We build around your audience, buying cycle, and operational reality instead of forcing the same playbook on every business."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.title} className="content-card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{industry.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro
          eyebrow="Why Absolute Digital"
          title="A sharper alternative to fragmented marketing vendors"
          description="The value is not just in what we do. It is in how the pieces work together: strategy, creative, execution, and accountability."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="content-card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22">
        <SectionIntro eyebrow="FAQ" title="Common questions" description="A few direct answers before you reach out." />
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="content-card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell mt-22 pb-4">
        <div className="cta-banner">
          <div>
            <p className="eyebrow !text-white/70">Ready to Grow?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Need a campaign, website, or digital product that actually moves the business?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Work with Absolute Digital on SEO, paid ads, social media, websites, landing pages, branding, or software product initiatives.
            </p>
          </div>
          <button type="button" onClick={() => navigate('/contact')} className="cta-secondary border-white/20 bg-white text-primary">
            Talk to Absolute Digital
          </button>
        </div>
      </section>
    </>
  )
}

export default HomePage
