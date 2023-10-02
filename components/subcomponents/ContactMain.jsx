import React from 'react';
import { FiMail, FiMessageSquare, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ContactMain = () => {
  // Replace these with your actual contact details
  const email = 'mohitvaswani010@email.com';
  const phoneNumber = '6378763018';
  const twitterUsername = 'hii_mohit';
  const linkedinUsername = 'mohit-vaswani-10';

  return (
    <main className='flex flex-col gap-14 contactList'>
      <h1 className='text-8xl'>Say hello </h1>
      <ul className='flex text-4xl gap-12'>
        <li>
          <a href={`mailto:${email}`}>
            <FiMail /> Mail
          </a>
        </li>
        <li>
          <a href={`https://wa.me/${phoneNumber}`}>
            <FiMessageSquare /> Whatsapp
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/${twitterUsername}`}>
            <FiTwitter /> Twitter
          </a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/in/${linkedinUsername}`}>
            <FiLinkedin /> LinkedIn
          </a>
        </li>
      </ul>
    </main>
  );
};

export default ContactMain;
