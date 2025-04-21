
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface SubscriptionPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SubscriptionPopup = ({ open, onOpenChange }: SubscriptionPopupProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[950px] p-0 overflow-hidden bg-white rounded-2xl border-0 shadow-xl">
        <div className="absolute right-4 top-4 z-10">
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 rounded-full"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">One subscription.</h2>
          <h3 className="text-2xl font-semibold mb-4">Unlimited access to GATE AI's Question Bank, Mock Exams, and Skills Trainer.</h3>
          <p className="mt-2 text-lg">Choose the plan that works best for your preparation needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Free Plan */}
          <Card className={`border-2 ${selectedPlan === 'free' ? 'border-blue-500' : 'border-gray-200'} relative overflow-hidden`}>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">Free Plan</h3>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold">₹0</span>
                <span className="text-gray-500 mb-1">Forever</span>
              </div>
              <p className="text-gray-600">Perfect for trying out our platform.</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="font-semibold mb-2">What's included:</p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>15 QR, AR & Reading Questions</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>1 AI-Marked Writing Task</span>
                </li>
                <li className="flex gap-3 items-center text-gray-400">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="text-gray-400 h-3.5 w-3.5" />
                  </div>
                  <span>Full Length Timed Mock Exams</span>
                </li>
                <li className="flex gap-3 items-center text-gray-400">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="text-gray-400 h-3.5 w-3.5" />
                  </div>
                  <span>All AI-Powered Skill Trainer Modules</span>
                </li>
                <li className="flex gap-3 items-center text-gray-400">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="text-gray-400 h-3.5 w-3.5" />
                  </div>
                  <span>Access to Newly Released Questions</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handlePlanSelect('free')}
              >
                Start Free
              </Button>
            </CardFooter>
          </Card>
          
          {/* Premium Plan */}
          <Card className={`border-2 ${selectedPlan === 'premium' ? 'border-blue-500' : 'border-gray-200'} relative overflow-hidden`}>
            <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Recommended
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">Premium Plan</h3>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold">₹450</span>
                <span className="text-gray-500 mb-1">per month</span>
              </div>
              <p className="text-gray-600">Everything you need for GATE success.</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="font-semibold mb-2">What's included:</p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>2000+ GATE Questions (QR, AR & Reading)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>Unlimited Writing Prompts with AI Marking</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>Full Length Timed Mock Exams</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>All AI-Powered Skill Trainer Modules</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="text-blue-600 h-3.5 w-3.5" />
                  </div>
                  <span>Access to Newly Released Questions</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handlePlanSelect('premium')}
              >
                Go Premium
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Alternate plans section */}
        <div className="p-8 bg-gray-50 border-t">
          <h3 className="text-xl font-bold text-center mb-6">Choose Your Premium Billing Cycle</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Weekly Plan */}
            <Card className={`border-2 ${selectedPlan === 'weekly' ? 'border-blue-500 shadow-md' : 'border-gray-200'} hover:border-blue-300 transition-all duration-200`}>
              <CardHeader className="pb-2">
                <h4 className="font-semibold text-lg">Weekly</h4>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-4xl font-bold">₹25</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">billed weekly</p>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button 
                  variant={selectedPlan === 'weekly' ? "default" : "outline"} 
                  className={`w-full ${selectedPlan === 'weekly' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  onClick={() => handlePlanSelect('weekly')}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            
            {/* Quarterly Plan */}
            <Card className={`border-2 ${selectedPlan === 'quarterly' ? 'border-blue-500 shadow-md' : 'border-gray-200'} hover:border-blue-300 transition-all duration-200 relative`}>
              <div className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                Save 20%
              </div>
              <CardHeader className="pb-2">
                <h4 className="font-semibold text-lg">Quarterly</h4>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-4xl font-bold">₹260</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">billed quarterly</p>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button 
                  variant={selectedPlan === 'quarterly' ? "default" : "outline"} 
                  className={`w-full ${selectedPlan === 'quarterly' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  onClick={() => handlePlanSelect('quarterly')}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            
            {/* Yearly Plan */}
            <Card className={`border-2 ${selectedPlan === 'yearly' ? 'border-blue-500 shadow-md' : 'border-gray-200'} hover:border-blue-300 transition-all duration-200 relative`}>
              <div className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                Save 40%
              </div>
              <CardHeader className="pb-2">
                <h4 className="font-semibold text-lg">Yearly</h4>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-4xl font-bold">₹780</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">billed yearly</p>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button 
                  variant={selectedPlan === 'yearly' ? "default" : "outline"} 
                  className={`w-full ${selectedPlan === 'yearly' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  onClick={() => handlePlanSelect('yearly')}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="p-8 flex justify-between items-center border-t bg-white">
          <Button 
            variant="ghost" 
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-6"
            onClick={() => onOpenChange(false)}
          >
            Maybe later
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg font-medium rounded-xl" 
            disabled={!selectedPlan}
          >
            Continue to Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;
