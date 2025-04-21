
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

              {/* Free Plan */}
              <div
                className={`flex-1 basis-[45%] rounded-2xl bg-[#f9fafb] border border-[#1196f4] p-8 flex flex-col
                  ${selectedPlan === "free" ? "ring-2 ring-[#1196f4] shadow-lg" : ""}
                  cursor-pointer
                  transition-all duration-300`}
                style={{ minWidth: "0" }}
                onClick={() => handlePlanSelect("free")}
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

              {/* Premium Plan with improved visible rainbow border and bigger size */}
              <div
                className={`
                  flex-1 basis-[55%] relative cursor-pointer transition-all duration-300
                  ${selectedPlan === "premium" ? "ring-2 ring-[#1196f4] z-10" : ""}
                  flex flex-col items-stretch
                `}
                onClick={() => handlePlanSelect("premium")}
                style={{ minWidth: "0" }}
              >
                {/* Rainbow border - made more visible and prominent */}
                <div className="absolute -inset-[3px] md:-inset-[3px] bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#8b5cf6] rounded-3xl animate-gradient z-0 p-[2px]"></div>
                
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
                    className="w-full mt-auto text-base rounded-lg py-3 bg-gradient-to-r from-[#7863f8] to-[#4e79fe] text-white hover:shadow-lg hover:scale-[1.02] transition-all"
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
              className="bg-[#1196f4] hover:bg-[#0e7ad9] text-white px-8 py-3 h-auto text-lg font-medium rounded-xl disabled:opacity-60"
              disabled={!selectedPlan}
            >
              Continue to Payment
            </Button>
          </div>
        </div>
        {/* Animation keyframes */}
        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;
