import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does indexing take?",
    answer: "Typically, indexing takes between 2-5 minutes depending on your website size. Larger sites with hundreds of pages may take up to 15 minutes. You'll receive a notification when your agent is ready.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. Your website content is stored in isolated vector databases, and we never share your data with third parties. We're SOC 2 compliant.",
  },
  {
    question: "Can I customize the widget's look?",
    answer: "Yes! You can customize colors, position, welcome messages, and more through our dashboard. Premium plans offer full white-labeling options including custom icons and branding.",
  },
  {
    question: "What happens if my website content changes?",
    answer: "Our system automatically re-indexes your site periodically to keep the AI agent up-to-date. You can also trigger a manual re-index anytime through the dashboard.",
  },
  {
    question: "How accurate are the AI responses?",
    answer: "Our AI is trained specifically on your content, ensuring highly accurate and contextual responses. It only answers based on information available on your site, reducing hallucinations and incorrect information.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our AI agent widget
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
