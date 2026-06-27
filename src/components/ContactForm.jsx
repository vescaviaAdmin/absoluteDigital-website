import React from 'react'
import toast from 'react-hot-toast'
import assets from '../assets/assets'

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append('access_key', '2738e7c3-8bc9-46d4-acac-071c74d03fa6')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Thank you. We will reach out soon.')
        event.target.reset()
        return
      }

      toast.error(data.message || 'Unable to submit the form.')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-primary/5 dark:border-white/10 dark:bg-white/5 sm:grid-cols-2 sm:p-8">
      <label className="field-card">
        <span className="field-label">Your Name</span>
        <div className="field-input">
          <img src={assets.person_icon} alt="" />
          <input type="text" name="name" placeholder="Enter your name" required />
        </div>
      </label>

      <label className="field-card">
        <span className="field-label">Email Address</span>
        <div className="field-input">
          <img src={assets.email_icon} alt="" />
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>
      </label>

      <label className="field-card">
        <span className="field-label">Phone Number</span>
        <div className="field-input">
          <img src={assets.person_icon} alt="" />
          <input type="text" name="phone" placeholder="Enter your number" />
        </div>
      </label>

      <label className="field-card">
        <span className="field-label">Service Needed</span>
        <div className="field-input">
          <img src={assets.marketing_icon} alt="" />
          <input type="text" name="service" placeholder="SEO, Ads, Website, Product..." />
        </div>
      </label>

      <label className="field-card sm:col-span-2">
        <span className="field-label">Project Goals</span>
        <textarea
          rows={7}
          name="message"
          placeholder="Tell us what you want to grow, launch, or improve."
          className="field-textarea"
          required
        />
      </label>

      <button type="submit" className="cta-primary w-max">
        Send Enquiry <img src={assets.arrow_icon} alt="" className="w-4" />
      </button>
    </form>
  )
}

export default ContactForm
