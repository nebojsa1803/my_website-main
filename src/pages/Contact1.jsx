import { Form, redirect, useRouteError } from 'react-router-dom'
import { FormInput, TextArea, SubmitButton } from '../components'

import axios from 'axios'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  // take input values
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const { email, message } = data

  // check are there empty fields
  if (!email || !message) {
    toast.error('Please provide all values.')
    return null
  }

  // check is provided email address valid
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    toast.error('Please provide valid email address.')
    return null
  }

  // everything ok, send message
  await axios.post('https://formspree.io/f/xgejozpp', data)
  toast.success('Your message has been sent.')

  // everything is ok so redirect to landing page
  return redirect('/')
}

const Contact1 = () => {
  return (
    <section className=' grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Contact Form</h4>

        <FormInput type='text' label='Your Mail' name='email' />

        <TextArea label='Message' name='message' />

        <SubmitButton text='Send' />
      </Form>
    </section>
  )
}

export default Contact1
