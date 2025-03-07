import { useState } from "react";
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
    answer:
      "Dental financing at Aspen Dental is provided by third-party lenders to offer you a flexible way to pay for your dental treatments. It provides access to the care you need without having to worry about upfront costs.",
  },
  {
    question: "Dental credit cards",
    answer:
      "Dental credit cards offer patients a line of credit to pay for their current and future dental treatments. Similar to traditional credit cards, your lender will set a credit limit for you to draw from.",
  },
  {
    question: "Dental loans",
    answer:
      "Dental loans are unsecured personal loans that you can use to pay for dental procedures with a set monthly payment. Loans like this have a designated borrowing amount that will be repaid over a specified term.",
  },
  {
    question: "What is principal and interest?",
    answer:
      "Principal refers to the initial amount of money that’s borrowed. It does not include any interest that may be charged on a loan. For example, if you borrow $1,000 for your dental treatment, the principal is $1,000.",
  },
  {
    question: "What is deferred interest?",
    answer:
      "Deferred interest is when your financing plan has a period of zero interest if your balance is paid off before the designated timeframe ends. If you can’t pay it in full by then, interest payments will be applied retroactively.",
  },
  {
    question: "What does term of loan mean?",
    answer:
      "The term of a loan refers to the length of time you have to repay your loan. It’s the period between the date the loan is disbursed to you and the date it’s fully repaid. The term of your loan can vary based on the agreement.",
  },
  {
    question: "What is a credit score?",
    answer:
      "Your credit score is a numerical representation of your creditworthiness. It’s used by lenders to evaluate your ability to repay debt(s) and to determine the level of risk associated with lending to you.",
  },
  {
    question: "What determines a good to bad credit?",
    answer:
      "Factors that impact your credit score may include your repayment history, amount of debt owed, length of credit history, types of credit used and new credit inquiries. It’s important for you to maintain a good credit score to access better financing options.",
  },
];

const FinancingButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto"
      >
        Apply Now
      </button>
      {showDropdown && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg z-10">
          <a
            href="https://apply.sunbit.com/Zfamilyandcosmeticdentistry"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-blue-800 hover:bg-blue-100"
          >
            Sunbit
          </a>
          <a
            href="https://www.carecredit.com/go/224CCK/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-blue-800 hover:bg-blue-100"
          >
            CareCredit
          </a>
        </div>
      )}
    </div>
  );
};

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
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 relative">
              <FinancingButton />
              <a
                href="tel:(386) 574-7272"
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
              <h3 className="mt-6 text-xl font-semibold">
                Explore Your Offer
              </h3>
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
          <div className="rounded-2xl shadow-lg p-8 text-center my-12 max-w-7xl mx-auto bg-white">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Get Started Today!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Apply online or speak with one of our representatives to get
              started on your journey to stress-free financing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <FinancingButton />
              <a
                href="tel:1234567890"
                className="text-blue-600 font-semibold hover:underline"
              >
                Call Us: (386) 574-7272
              </a>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Click the button to view our Financing Partners below.
            </p>
          </div>
        </section>
      </Fade>
      <Fade direction="up">
        <Faq faqs={faqData} sectionTitle="Dental Financing FAQs" />
      </Fade>
    </main>
  );
};

export default DentalFinancing;
