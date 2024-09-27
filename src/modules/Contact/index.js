import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'; // Import icons from react-icons
import { ContactForm, ContactWrapper, InfoSection } from './Styled';


const Contact = () => {
  return (
    <ContactWrapper>
      <ContactForm>
        <h2>Contact us</h2>
        <p>Get in touch to see how our smart cameras and data-driven insights can boost your club’s performance and profits!</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </ContactForm>
      <InfoSection>
        <h2>Info</h2>
        <ul>
          <li><FiMail /> Vgoyal@proformance.com</li>
          <li><FiPhone /> +1 (647) 284 3632</li>
          <li><FiMapPin /> 123 Business Street</li>
          <li><FiClock /> Mon-Fri: 9:00 - 18:00</li>
        </ul>
      </InfoSection>
    </ContactWrapper>
  );
};

export default Contact;
