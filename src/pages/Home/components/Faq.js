import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "CodeBook offers a wide selection of e-books covering various topics such as coding, programming languages, web development, and more.With CodeBook, you can access high-quality digital resources to enhance your coding skills, advance your career, and stay updated with the latest industry trends.Explore CodeBook's extensive collection for valuable insights, tutorials, and guides curated to support learners and professionals in their coding journey."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes, CodeBook provides mobile accessibility, allowing you to conveniently access your e-books on-the-go through your smartphone or tablet using the CodeBook app. Enjoy seamless reading experiences anytime, anywhere, and stay connected to your digital library effortlessly."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Yes, CodeBook offers a refund policy to ensure customer satisfaction. If you encounter any issues with your e-book purchase or are unsatisfied with your experience, you may be eligible for a refund according to our refund policy guidelines. Please reach out to our customer support team for assistance with your refund request."
        },
        {
          "id": 4,
          "question": "Do you support International payments?",
          "answer": "Yes, CodeBook supports international payments, providing a seamless purchasing experience for customers worldwide. You can securely make payments using various international payment methods, ensuring accessibility and convenience regardless of your location."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
             {faqs.map( (faq)=>(
             <Accordion key={faq.id} faq={faq}/>)
                  
                )}           
                </div>
      </section>
  )
}