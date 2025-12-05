import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WidgetCode from "@/components/WidgetCode";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWidgetCode, setShowWidgetCode] = useState(false);

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
      <Hero onSubmit={handleUrlSubmit} isLoading={isLoading} />
      <HowItWorks />
      <WidgetCode url={submittedUrl} isVisible={showWidgetCode} />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
