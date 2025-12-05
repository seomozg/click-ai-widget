import { motion } from "framer-motion";
import { Zap, Brain, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Без обучения",
    description: "Наш ИИ автоматически учится на контенте вашего сайта. Никакой ручной настройки или подготовки данных.",
  },
  {
    icon: Brain,
    title: "Контекст с первой минуты",
    description: "Ответы основаны на реальном контенте вашего сайта — точные и релевантные ответы на каждый запрос.",
  },
  {
    icon: Clock,
    title: "Установка за секунды",
    description: "Всего одна строка кода. Скопируйте, вставьте — и ваш ИИ-агент уже работает на сайте.",
  },
  {
    icon: Shield,
    title: "Безопасность и масштабируемость",
    description: "Корпоративный уровень безопасности с автоматическим масштабированием. Ваши данные зашифрованы и защищены.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают <span className="gradient-text">наше решение</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Создано для простоты, спроектировано для производительности
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
