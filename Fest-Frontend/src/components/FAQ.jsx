import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FaqsCard = ({ faqsList, idx }) => {
  const answerElRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="space-y-3 mt-5 overflow-hidden border-b pb-5"
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        className="cursor-pointer flex items-center justify-between text-lg text-gray-700 font-medium hover:text-blue-600 transition-all"
        onClick={handleOpenAnswer}
        whileHover={{ scale: 1.02 }}
      >
        {faqsList.q}
        {isOpen ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </motion.svg>
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </motion.svg>
        )}
      </motion.h4>
      <motion.div
        ref={answerElRef}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 mt-2">{faqsList.a}</p>
      </motion.div>
    </motion.div>
  );
};

FaqsCard.propTypes = {
  faqsList: PropTypes.shape({
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
};

const FAQ = () => {
  const faqsList = [
    {
      q: "How do I create an account?",
      a: "Click on the 'Sign Up' button at the top-right corner and follow the instructions to register.",
    },
    {
      q: "What payment methods do you support?",
      a: "We support various payment methods, including credit/debit cards, PayPal, and digital wallets.",
    },
    {
      q: "Is my data secure on your platform?",
      a: "Absolutely! We use advanced encryption protocols to ensure your data is safe and secure.",
    },
    {
      q: "How can I reset my password?",
      a: "You can reset your password by clicking on 'Forgot Password' on the login page and following the steps.",
    },
    {
      q: "Do you offer customer support?",
      a: "Yes, our support team is available 24/7 to assist you with any queries or issues.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      {/* Header Section */}
      <div className="space-y-3 text-center">
        <motion.h1
          className="text-3xl text-gray-800 font-semibold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-lg mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have questions? Here are the answers to some of the most commonly asked queries.
        </motion.p>
      </div>

      {/* FAQ List */}
      <motion.div
        className="mt-14 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
