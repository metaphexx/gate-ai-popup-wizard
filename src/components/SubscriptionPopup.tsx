
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

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
      <DialogContent className="max-w-2xl md:max-w-4xl p-0 bg-transparent border-0 shadow-xl">
        <DialogTitle className="sr-only">Subscription Plans</DialogTitle>
        <div className="rounded-2xl bg-white shadow-xl w-full overflow-visible">
          {/* Top: Blue Gradient Header */}
          <div className="rounded-t-2xl bg-gradient-to-r from-[#1196f4] to-[#1196f4] px-6 py-7 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 leading-tight">
              Start Free. Upgrade Anytime.
            </h2>
            <p className="text-lg md:text-xl text-blue-100 font-medium">
              Choose the plan that works best for your preparation needs
            </p>
          </div>
          {/* Plans Section (side by side, unified white background) */}
          <div className="px-6 md:px-10 py-8">
            <div className="flex flex-col md:flex-row gap-6">

              {/* Free Plan with shadow */}
              <div
                className={`flex-1 basis-[45%] rounded-2xl bg-[#f9fafb] p-8 flex flex-col shadow-md relative cursor-pointer ${selectedPlan === 'free' ? 'ring-2 ring-blue-500' : ''}`}
                style={{ minWidth: "0" }}
                onClick={() => handlePlanSelect('free')}
              >
                <h3 className="text-[1.4rem] font-bold text-gray-900 mb-3">Free Plan</h3>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-gray-900 leading-none">$0</span>
                  <span className="text-lg text-gray-700 mb-1 font-semibold">Forever</span>
                </div>
                <div className="text-gray-700 text-base mb-6 font-medium">Perfect for trying out our platform.</div>
                <div className="mb-2 font-semibold text-gray-800">What's included:</div>
                <ul className="space-y-3 mb-7">
                  <li className="flex gap-3 items-center text-base text-gray-900">
                    <Check className="text-green-500 h-5 w-5" />
                    <span>15 QR, AR &amp; Reading Questions</span>
                  </li>
                  <li className="flex gap-3 items-center text-base text-gray-900">
                    <Check className="text-green-500 h-5 w-5" />
                    <span>1 AI-Marked Writing Task</span>
                  </li>
                  <li className="flex gap-3 items-center text-base text-gray-400">
                    <X className="h-5 w-5" />
                    <span className="line-through">Full Length Timed Mock Exams</span>
                  </li>
                  <li className="flex gap-3 items-center text-base text-gray-400">
                    <X className="h-5 w-5" />
                    <span className="line-through">All AI Powered Skill Trainer Modules</span>
                  </li>
                  <li className="flex gap-3 items-center text-base text-gray-400">
                    <X className="h-5 w-5" />
                    <span className="line-through">Access to Newly Released Questions</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-auto text-white text-base rounded-lg py-3 bg-[#1196f4] hover:bg-[#0e7ad9]"
                  variant="default"
                >
                  Start Free
                </Button>
              </div>

              {/* Premium Plan with animated rainbow gradient border */}
              <div
                className={`flex-1 basis-[55%] relative flex flex-col items-stretch cursor-pointer ${selectedPlan === 'premium' ? 'ring-2 ring-blue-500 rounded-2xl' : ''}`}
                style={{ minWidth: "0" }}
                onClick={() => handlePlanSelect('premium')}
              >
                {/* Animated rainbow gradient border */}
                <div className="absolute -inset-[3px] rounded-2xl overflow-hidden" 
                  style={{ 
                    zIndex: 0,
                    borderRadius: "1rem"
                  }}
                >
                  <div 
                    className="animate-gradient w-full h-full"
                    style={{
                      background: "linear-gradient(135deg, #4F46E5, #7C3AED, #A855F7, #EC4899, #F97316, #33C3F0, #3B82F6, #4F46E5)",
                      backgroundSize: "400% 400%"
                    }}
                  />
                </div>
                
                {/* Content container */}
                <div className="relative z-10 rounded-2xl bg-white p-8 flex flex-col h-full">
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      Recommended
                    </span>
                  </div>
                  <h3 className="text-[1.4rem] font-bold text-gray-900 mb-3">Premium Plan</h3>
                  <div className="flex items-end gap-3 mb-1 flex-wrap">
                    <span className="text-4xl font-extrabold text-gray-900 leading-none">$9.69</span>
                    <span className="text-lg text-gray-700 mb-1 font-semibold">per week, billed monthly</span>
                  </div>
                  <div className="text-gray-700 text-base mb-6 font-medium">Everything you need for GATE success.</div>
                  <div className="mb-2 font-semibold text-gray-800">What's included:</div>
                  <ul className="space-y-3 mb-7">
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>2000+ GATE Questions (QR, AR &amp; Reading)</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>Unlimited Writing Prompts with AI Marking</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>Full Length Timed Mock Exams</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>All AI Powered Skill Trainer Modules</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>Access to Newly Released Questions</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full mt-auto text-base rounded-lg py-3 bg-[#6366F1] text-white hover:bg-[#4F46E5] hover:brightness-110 hover:shadow-md transition-all"
                    variant="default"
                  >
                    Go Premium
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom actions bar */}
          <div className="flex justify-between items-center border-t bg-[#f9fafb] px-8 md:px-10 py-6 rounded-b-2xl">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-6"
              onClick={() => onOpenChange(false)}
            >
              Maybe later
            </Button>
            <Button
              className={`bg-[#1196f4] hover:bg-[#0e7ad9] text-white px-8 py-3 h-auto text-lg font-medium rounded-xl ${!selectedPlan ? 'opacity-60' : ''}`}
              onClick={() => selectedPlan && console.log(`Proceeding to payment for ${selectedPlan} plan`)}
              disabled={!selectedPlan}
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;
