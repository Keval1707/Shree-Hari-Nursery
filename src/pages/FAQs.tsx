import React from "react";

const FAQs: React.FC = () => {
  const faqs = [
    { question: "What types of plants do you sell?", answer: "We offer a variety of indoor and outdoor plants, including succulents, bonsai, and flowering plants." },
    { question: "Do you provide home delivery?", answer: "Yes, we offer home delivery within a certain radius. Contact us for details." },
    { question: "How do I take care of my plants?", answer: "Each plant comes with a care guide. You can also ask our experts for tips." },
  ];

  return (<>
    <div style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <h3 style={styles.question}>{faq.question}</h3>
            <p style={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  faqList: {
    maxWidth: "800px",
    margin: "auto",
  },
  faqItem: {
    padding: "1rem",
    borderBottom: "1px solid #ddd",
    textAlign: "left" as const,
  },
  question: {
    fontSize: "1.2rem",
    fontWeight: "bold" as const,
  },
  answer: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default FAQs;
