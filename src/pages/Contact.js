import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail}  from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12099.96491148068!2d-73.9954548341802!3d40.69619084233262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4a8a2a0203%3A0xdff417da15980851!2sDowntown%20Brooklyn%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1695747520637!5m2!1sen!2sus"
                width="600"
                height="450"
                title="My location"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Email'
                      />
                    </div>
                    <div>
                    <input 
                      type="tel" 
                      className='form-control' 
                      placeholder='Mobile Number'
                    />
                  </div>
                    <div>
                      <textarea 
                        name="" 
                        id="" 
                        className='w-100 form-control'
                        cols="30" 
                        rows="4"
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>
                          277 Underhill Ave, Suite 330, Boston, MA
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href="tel:+1 718-398-4396">+1 718-398-4396</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:zahara@co.com">zahara@co.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 9AM - 10PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
