import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WidgetCode from "@/components/WidgetCode";
import WidgetConfig from "@/components/WidgetConfig";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const IndexContent = () => {
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWidgetCode, setShowWidgetCode] = useState(false);
  const [widgetConfig, setWidgetConfig] = useState({
    title: "AI Assistant",
    welcomeMessage: "Hello! How can I help you today?",
    sendButtonText: "Send",
    inputPlaceholder: "Type your message...",
    color: "#3B82F6",
  });

  const handleUrlSubmit = async (url: string) => {
    setIsLoading(true);
    
    // Simulate API call / processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setSubmittedUrl(url);
    setShowWidgetCode(true);
    setIsLoading(false);
    
    toast({
      title: "Success!",
      description: "Your AI agent has been generated and is ready to embed.",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <LanguageSwitcher />
      <Hero onSubmit={handleUrlSubmit} isLoading={isLoading} />
      <HowItWorks />
      <WidgetCode url={submittedUrl} isVisible={showWidgetCode} config={widgetConfig} />
      <WidgetConfig config={widgetConfig} onChange={setWidgetConfig} isVisible={showWidgetCode} />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
