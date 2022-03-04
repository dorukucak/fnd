import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  message: '',
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>You can reach us via mail, phone, and e-mail.</p>
              </div>
              <div className='row-md-3 contact-info '>
                <div className='col-md-4'>
                  <div className='contact-item'>
                    <p>
                      <span>
                        <i className='fa fa-map-marker'></i> Address
                      </span>
                      {props.data ? props.data.address : 'loading'}
                    </p>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='contact-item'>
                    <p>
                      <span>
                        <i className='fa fa-phone'></i> Phone
                      </span>{' '}
                      {props.data ? props.data.phone : 'loading'}
                    </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='contact-item'>
                    <p>
                      <span>
                        <i className='fa fa-envelope-o'></i> Email
                      </span>{' '}
                      {props.data ? props.data.email : 'loading'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.7971575000847!2d-1.1174880842384451!3d51.27805277959812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487421e83199ddbf%3A0x42ab8de135a46fa3!2s60a%20Peggs%20Way%2C%20Basingstoke%20RG24%209FX!5e0!3m2!1sen!2suk!4v1646410448754!5m2!1sen!2suk'
                width='370'
                height='300'
                style={{ border: 0, boxShadow: '5px 5px 15px 5px darkblue' }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Aleyla Software Ltd. Design by
            <a href='http://www.aleylasoftware.com' rel='nofollow'>
              {' '}
              Aleyla Software
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
