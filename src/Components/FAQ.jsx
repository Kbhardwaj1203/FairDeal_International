import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../Styles/FAQ.css';
import faqBanner from '../assets/faqs.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
  {
    question: 'What is a best mattress?',
    answer: `However, each customer has his/her own specified taste & preferences to rate any product as good, better or best. Similarly, mattress selection hugely depends upon individual choices. But, as per experts, there are certain points, which help you to choose the best mattress, which suits your health and comfort needs.\n\nMake sure when you examine a mattress at the time of purchase, you notice its three features including space, support and comfort level. The linen used in mattress should also be skin friendly and stuff of the product should not be too tough.`
  },
  {
    question: 'How to decide when your mattress requires replacement?',
    answer: `Fresh and new mattresses definitely offer you sound and comfortable sleep. But, over the time, as they grow old, you start discovering discomfort while using these mattresses. Your body feels stiff even after hours of sleep on those mattresses and their outer linen also starts damaging. This calls for a new mattress purchase.`
  },
  {
    question: 'What are the different methods for mattress testing?',
    answer: `We strongly recommend you to test and try the mattresses before your purchase them. Here are some quick tips to help you through this process:\n\nSelect the mattress, which has soft and skin friendly fabric sewed on it.\n\nLie down on the mattress in various positions, sleeping straight and turn left right too.\n\nEvaluate performance of the mattress based on the level of comfort you experienced during this test.\n\nIf you are purchasing a couple mattresses, we recommend you to try it together before taking a final call.`
  },
  {
    question: 'How long mattresses generally last?',
    answer: `It totally depends on how you use them. Quality mattresses are likely to perform excellently for years, if they are paid enough care and maintenance. Experts recommend that you should examine condition of your mattress in relation with your body's comfort level, at least twice a year.`
  },
  {
    question: 'What are the recommended methods for mattress maintenance?',
    answer: `The best method to keep a mattress clean is preventing it from dust and dirt since beginning. You can use mattress covers for that purpose. Using pest control to prevent the bugs from cutting its fabric is also important. Handling it with care is very important at the time of shifting. You can put the mattress in nominal sunlight during winter or humid days to prevent fungus.`
  },
  {
    question: 'How to share feedback/point out issues or register complaint about my purchase?',
    answer: `We are always open for customer suggestions, feedback and queries. You can reach out our customer assistance wing through email, they will be glad to assist you.\n\nCustomer care email address: info@fairdealinternational.org`
  },
  {
    question: 'Where can I find registered mattress of Fairdeal International?',
    answer: `We have mentioned details of our registered Office here on our website. For further assistance you can feel free to drop us an email at- info@fairdealinternational.org`
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleIndex = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      <section className="faq-hero" style={{ backgroundImage: `url(${faqBanner})` }}>
        <div className="faq-hero-overlay" data-aos="fade-down">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
      <div className="faq-list">
        {faqData.map((item, idx) => (
          <div className={`faq-item${openIndex === idx ? ' open' : ''}`} key={idx}>
            <button className="faq-question" onClick={() => toggleIndex(idx)}>
              <span>{item.question}</span>
              {openIndex === idx ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
            </button>
            <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === idx ? '500px' : '0' }}>
              <div className="faq-answer">
                {item.answer.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 