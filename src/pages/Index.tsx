
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SubscriptionPopup from "@/components/SubscriptionPopup";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GATE AI Question Bank</h1>
          <p className="text-xl mb-8">Prepare smarter with AI-powered practice questions and mock tests</p>
          <Button 
            className="text-blue-600 bg-white hover:bg-blue-50 px-8 py-6 text-lg rounded-xl"
            onClick={() => setIsPopupOpen(true)}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Accelerate Your GATE Preparation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers comprehensive resources tailored for GATE aspirants, with a focus on practice and improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Questions</h3>
            <p className="text-gray-600">
              Access our growing database of high-quality questions similar to GATE exam patterns.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Mock Exams</h3>
            <p className="text-gray-600">
              Test your knowledge with full-length timed mock exams to simulate the real GATE experience.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Skills Trainer</h3>
            <p className="text-gray-600">
              Target specific areas for improvement with our personalized skills trainer.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl"
            onClick={() => setIsPopupOpen(true)}
          >
            View Pricing Plans
          </Button>
        </div>
      </div>

      {/* Subscription Popup */}
      <SubscriptionPopup 
        open={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
      />
    </div>
  );
};

export default Index;
