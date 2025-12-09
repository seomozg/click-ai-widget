import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              {language === "ru" ? "ИИ-Агент Виджет" : "AI Agent Widget"}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-foreground transition-colors">
              {language === "ru" ? "Контакты" : "Contact"}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 {language === "ru" ? "ИИ-Агент Виджет" : "AI Agent Widget"}. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
