import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is shadcn/ui?",
      answer: "shadcn/ui is a collection of reusable components built using Radix UI and Tailwind CSS. It's not a component library, but a collection of re-usable components that you can copy and paste into your apps."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, shadcn/ui is completely free and open-source. You can use it in personal and commercial projects without any restrictions."
    },
    {
      question: "Do I need to install anything to use these components?",
      answer: "Yes, you'll need to set up Tailwind CSS and install the necessary dependencies for each component. The documentation provides clear installation instructions for each component."
    },
    {
      question: "Can I customize the components?",
      answer: "Absolutely! One of the main benefits of shadcn/ui is that you own the code. The components are fully customizable, and you can modify them to fit your design system."
    },
    {
      question: "Does shadcn/ui support dark mode?",
      answer: "Yes, all components support both light and dark modes out of the box when you set up the appropriate theme provider."
    },
    {
      question: "How do I contribute to shadcn/ui?",
      answer: "You can contribute by submitting issues, providing feedback, or creating pull requests on the GitHub repository. The project welcomes community contributions."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight mb-2 hero">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about our services and how we work.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
            <AccordionTrigger className="text-lg font-medium py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;