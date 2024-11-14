import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Where I have worked</h5>
      <h2>Industry Experience</h2>
      <container className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Paygeon</h3>
            <h4>Software Developer Intern</h4>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed a React web app for seamless payment of invoices, credit card bills, and loans using multiple cryptocurrencies.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrated CryptAPI for real-time crypto prices and payment verification, enhancing transaction accuracy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented text extraction libraries for processing uploaded invoices, improving invoice processing efficiency.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managed invoice data with Supabase and PostgreSQL, ensuring data integrity and efficient storage.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automated payment confirmation emails via EmailJS, reducing manual follow-ups and enhancing communication speed.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Oracle Financial Services Software</h3>
            <h4>Associate Applications Developer</h4>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contributed to migrating a monolithic banking app to microservices, improving scalability and deployment frequency and reducing downtime.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designed a record approval interface using HTML, Knockout.js, and Java, streamlining workflows and enhancing record management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mitigated security vulnerabilities by leveraging Fortify Audit Workbench and ZAP tool.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Created Groovy test cases to increase static analysis coverage, enhancing code quality and issue detection.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automated over 100 test scenarios with Jenkins, saving 2 person-hours daily and enhancing CI/CD efficiency.</p>
            </li>
          </ul>
        </article>
      </container>
    </section>
  )
}

export default Services