import Fade from "react-awesome-reveal";
import {
  CheckCircle,
  Clock,
  DollarSign,
  HeartPulse,
  CalendarCheck,
  CreditCard,
} from "lucide-react";
import Faq from "../components/FAQs"; // Import the Faq component

const faqData = [
  {
    question: "How does dental financing work?",
    answer: "Dental financing at Aspen Dental is provided by third-party lenders to offer you a flexible way to pay for your dental treatments. It provides access to the care you need without having to worry about the cost upfront."
  },
  {
    question: "Dental credit cards",
    answer: "Dental credit cards offer patients a line of credit to pay for their current and future dental treatments. Similar to traditional credit cards, your lender will set a credit limit for you to draw on up to a designated maximum amount. Similarly, you can use as much or as little of your credit line as you need, plus you can repay the borrowed funds on a flexible schedule."
  },
  {
    question: "Dental loans",
    answer: "Dental loans are unsecured personal loans that you can use to pay for dental procedures with a set monthly payment. Loans like this have a designated borrowing amount that will be repaid over a set period of time, typically through a series of equal payments called installments."
  },
  {
    question: "What is principal and interest?",
    answer: "Principal refers to the initial amount of money that’s borrowed. It does not include any interest that may be charged on a loan. For example, if you borrow $1,000 for your dental treatment, the principal amount of your loan is $1,000.\n\nInterest is the cost accrued for borrowing money. It’s calculated as a percentage of the principal amount and is typically paid periodically, such as monthly or annually. For example, if you borrow $1,000 for your dental treatment at an annual interest rate (APR) of 5%, you will need to pay $50 in interest over the course of the year. The interest is added to the principal amount, meaning you would need to repay a total of $1,050 for a one-year loan term."
  },
  {
    question: "What is deferred interest?",
    answer: "Deferred interest is when your financing plan has a period of zero interest if your balance is paid off before the designated timeframe ends. If you can’t pay it in full by then, interest payments will be owed, often retroactively."
  },
  {
    question: "What does term of loan mean?",
    answer: "The term of a loan refers to the length of time you have to repay your loan. It’s the period between the date the loan is disbursed to you and the date it’s fully repaid. The term of your loan is typically expressed in months or years, depending on the duration of your loan.\n\nThe term of your loan is an important consideration when borrowing money as it can have a significant impact on the amount of interest you have to pay over the life of your loan. Generally, a longer loan term will result in lower monthly payments but may result in higher overall interest costs. On the other hand, a shorter loan term will result in paying higher monthly payments with lower overall interest costs."
  },
  {
    question: "What is a credit score?",
    answer: "Your credit score is a numerical representation of your creditworthiness. It’s used by lenders to evaluate your ability to repay debt(s) and to determine the level of risk associated with lending you money.\n\nThe most widely used credit scoring model is the FICO score, which ranges from 300 to 850. A higher credit score also indicates a lower risk of default, and is therefore seen as more favorable by lenders."
  },
  {
    question: "What determines a good to bad credit?",
    answer: "Factors that impact your credit score may include your repayment history, amount of debt owed, length of credit history, types of credit used and new credit inquiries. It’s important for you to maintain a good credit score in order to have access to favorable credit terms and interest rates."
  }
];

const DentalFinancing = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-16 px-6 mb-6">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">
              Affordable Financing for Your Dental Care
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              We believe everyone deserves a healthy smile. Our flexible
              financing options make high-quality dental treatments accessible,
              with plans tailored to fit your budget and lifestyle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Apply Now
              </button>
              <a
                href="tel:1234567890"
                className="font-bold text-white flex items-center text-lg"
              >
                Call (386) 574-7272
              </a>
            </div>
          </Fade>
        </div>
      </header>
      <Fade direction="left">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Is Dental Financing Right for You?
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Dental financing is a flexible way to manage the cost of dental
            treatments. It allows you to spread payments over time, making it
            easier to afford the care you need. Below, we break down how it
            works and why it might be the right choice for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Great Approval Rating
              </h3>
              <p className="mt-4 text-gray-700">
                Our financing options are designed to be accessible, with a high
                approval rate for patients from all financial backgrounds.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Same-Day Financing</h3>
              <p className="mt-4 text-gray-700">
                Need urgent dental care? Get approved for financing on the same
                day, so you don’t have to delay your treatment.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <HeartPulse className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Flexible Payment Plans
              </h3>
              <p className="mt-4 text-gray-700">
                Choose from a variety of payment plans to fit your budget,
                allowing you to spread the cost over manageable installments.
              </p>
            </div>
          </div>
        </section>
      </Fade>
      <Fade direction="left">
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Apply for Financing
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our financing options are designed to make dental care affordable
            and stress-free. Explore how you can get started today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <CreditCard className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Apply for Your Visit
              </h3>
              <p className="mt-4 text-gray-700">
                Start your financing journey by filling out a simple application
                online or during your visit.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <DollarSign className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Explore Your Offer</h3>
              <p className="mt-4 text-gray-700">
                Receive personalized financing options tailored to your needs
                and budget.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white">
                <CalendarCheck className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Low Payments Over Time
              </h3>
              <p className="mt-4 text-gray-700">
                Enjoy flexible payment plans that fit your budget and let you
                focus on your dental health.
              </p>
            </div>
          </div>
          <div className=" rounded-2xl shadow-lg p-8 text-center my-12 max-w-7xl mx-auto bg-white">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Get Started Today!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Apply online or speak with one of our representatives to get
              started on your journey to stress-free financing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
                Apply Online
              </button>
              <a
                href="tel:1234567890"
                className="text-blue-600 font-semibold hover:underline"
              >
                Call Us: (386) 574-7272
              </a>
            </div>
          </div>
        </section>
      </Fade>
      <Fade direction="up">
        <Faq faqs={faqData} sectionTitle="Dental Financing FAQs" /> {/* Use the Faq component with faqs prop */}
      </Fade>
    </main>
  );
};

export default DentalFinancing;
