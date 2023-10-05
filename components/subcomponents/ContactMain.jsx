import React from 'react';
import { FiMail, FiMessageSquare, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

const ContactMain = () => {
  // Replace these with your actual contact details
  const email = 'mohitvaswani010@email.com';
  const phoneNumber = '6378763018';
  const twitterUsername = 'hii_mohit';
  const linkedinUsername = 'mohit-vaswani-10';
  const githubUsername = 'mohit-vaswani';

  return (
    <main className='flex flex-col gap-14 contactList'>
      <h1 className='text-5xl sm:text-6xl xl:text-8xl'>Say hello </h1>
      <ul className='flex flex-wrap text-xl sm:text-2xl xl:text-4xl gap-6 sm:gap-12'>
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
        <li>
          <a href={`https://github.com/${githubUsername}`}>
            <AiFillGithub /> Github
          </a>
        </li>
      </ul>
    </main>
  );
};

export default ContactMain;
