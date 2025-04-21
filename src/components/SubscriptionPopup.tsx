
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface SubscriptionPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Rainbow border styles for Premium plan
const rainbowBorder =
  "relative before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-[conic-gradient(at_top_left,_#F97316,_#FFDEE2,_#33C3F0,_#9b87f5,_#ea384c,_#0FA0CE,_#FDE1D3,_#33C3F0,_#F97316)] before:z-0";
const rainbowInner =
  "relative z-10 rounded-2xl bg-white";

const SubscriptionPopup = ({ open, onOpenChange }: SubscriptionPopupProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[680px] p-0 bg-transparent border-0 shadow-xl">
        <div className="rounded-2xl bg-white shadow-xl p-0 overflow-hidden w-full">
          {/* Header */}
          <div className="px-8 pt-8 pb-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Start Free. Upgrade Anytime.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-0">
              Choose the plan that works best for your preparation needs
            </p>
          </div>
          {/* Main plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8 pt-6 pb-0">
            
            {/* Free Plan */}
            <Card
              className={`rounded-2xl flex flex-col shadow-none min-h-full border ${
                selectedPlan === "free" ? "ring-2 ring-blue-400" : "border-gray-200"
              }`}
            >
              <CardHeader className="pb-2 bg-white rounded-t-2xl">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Free Plan</h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-gray-900 leading-none">$0</span>
                  <span className="text-lg text-gray-500 mb-1 font-semibold">Forever</span>
                </div>
                <p className="text-gray-800 mb-4 text-base">Try out all question types, get a feel for the GATE test and platform.</p>
                <hr className="my-2 border-gray-200" />
              </CardHeader>
              <CardContent className="bg-white pt-0 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
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
                    <span className="line-through">All AI-Powered Skill Trainer Modules</span>
                  </li>
                  <li className="flex gap-3 items-center text-base text-gray-400">
                    <X className="h-5 w-5" />
                    <span className="line-through">Access to Newly Released Questions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-0 bg-white rounded-b-2xl flex-grow-0">
                <Button
                  className="w-full mt-2 bg-[#1196f4] hover:bg-[#0e7ad9] text-white text-base rounded-lg py-3"
                  onClick={() => handlePlanSelect("free")}
                  variant={selectedPlan === "free" ? "default" : "ghost"}
                >
                  Start Free
                </Button>
              </CardFooter>
            </Card>
            
            {/* Premium Plan WITH Rainbow Border */}
            <div
              className={`${rainbowBorder} rounded-2xl shadow-none min-h-full flex flex-col ${selectedPlan === "premium" ? "ring-2 ring-blue-400" : ""}`}
              style={{ minHeight: "100%" }}
              onClick={() => handlePlanSelect("premium")}
            >
              <div className={`${rainbowInner} flex flex-col h-full cursor-pointer`}>
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Recommended
                  </span>
                </div>
                <CardHeader className="pb-2 bg-white rounded-t-2xl z-10 relative">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium Plan</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-extrabold text-gray-900 leading-none">
                      $9.69
                    </span>
                    {/* No billing cycle text as requested */}
                  </div>
                  <p className="text-gray-800 mb-4 text-base">
                    Everything you need for GATE success. Full access to 2000+ questions &amp; skills.<br/>
                  </p>
                  <hr className="my-2 border-gray-200" />
                </CardHeader>
                <CardContent className="bg-white pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>2000+ GATE Questions (QR, AR &amp; Reading)</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>Unlimited Writing Tasks with Instant AI Marking</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>Full Length Timed Mock Exams</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>All AI-Powered Skill Trainer Modules</span>
                    </li>
                    <li className="flex gap-3 items-center text-base text-gray-900">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>Access to Newly Released Questions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 bg-white rounded-b-2xl flex-grow-0">
                  <Button
                    className="w-full mt-2 bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] hover:from-[#7E69AB] hover:to-[#0FA0CE] text-white text-base rounded-lg py-3"
                    variant={selectedPlan === "premium" ? "default" : "ghost"}
                  >
                    Go Premium
                  </Button>
                </CardFooter>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="px-8 pb-8 pt-6 flex justify-between items-center bg-white rounded-b-2xl border-t">
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
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;

