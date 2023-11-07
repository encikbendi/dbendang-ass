import ContactForm from 'app/components/contact/ContactForm'
import Navbar from 'app/components/shared/Navbar'

const ContactUs = () => {
  return (
    <div className='bg-slate-200 min-h-screen py-20'>
      <Navbar/>
      <div className='w-full flex justify-center'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
