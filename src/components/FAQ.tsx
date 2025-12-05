import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени занимает индексация?",
    answer: "Обычно индексация занимает от 2 до 5 минут в зависимости от размера сайта. Для крупных сайтов с сотнями страниц может потребоваться до 15 минут. Вы получите уведомление, когда агент будет готов.",
  },
  {
    question: "Безопасны ли мои данные?",
    answer: "Абсолютно. Мы используем шифрование корпоративного уровня для всех данных при передаче и хранении. Контент вашего сайта хранится в изолированных векторных базах данных, и мы никогда не передаём ваши данные третьим лицам. Мы соответствуем стандарту SOC 2.",
  },
  {
    question: "Можно ли настроить внешний вид виджета?",
    answer: "Да! Вы можете настроить цвета, положение, приветственные сообщения и многое другое через нашу панель управления. Премиум-тарифы включают полную кастомизацию, включая собственные иконки и брендинг.",
  },
  {
    question: "Что происходит при изменении контента сайта?",
    answer: "Наша система автоматически переиндексирует ваш сайт периодически, чтобы ИИ-агент оставался актуальным. Вы также можете запустить ручную переиндексацию в любое время через панель управления.",
  },
  {
    question: "Насколько точны ответы ИИ?",
    answer: "Наш ИИ обучен специально на вашем контенте, что обеспечивает высокую точность и контекстуальность ответов. Он отвечает только на основе информации, доступной на вашем сайте, что снижает вероятность галлюцинаций и неточной информации.",
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
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Всё, что нужно знать о нашем ИИ-виджете
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
