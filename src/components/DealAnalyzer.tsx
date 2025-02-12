
import { useState } from "react";
import ReactConfetti from "react-confetti";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface DealInputs {
  purchasePrice: number;
  arv: number;
  rehabBudget: number;
  interestRate: number;
}

const DealAnalyzer = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [inputs, setInputs] = useState<DealInputs>({
    purchasePrice: 0,
    arv: 0,
    rehabBudget: 0,
    interestRate: 0,
  });
  const [result, setResult] = useState<{
    isGoodDeal: boolean;
    estimatedProfit: number;
    breakdown: {
      totalCosts: number;
      interestCost: number;
      loanAmount: number;
    };
  } | null>(null);

  const handleInputChange = (field: keyof DealInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  const resetForm = () => {
    setShowForm(true);
    setResult(null);
    setInputs({
      purchasePrice: 0,
      arv: 0,
      rehabBudget: 0,
      interestRate: 0,
    });
  };

  const calculateDeal = () => {
    const { purchasePrice, arv, rehabBudget, interestRate } = inputs;
    
    // Basic validation
    if (!purchasePrice || !arv || !rehabBudget) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Calculate total costs including interest
    const loanAmount = purchasePrice + rehabBudget;
    const interestCost = (loanAmount * (interestRate / 100));
    const totalCosts = loanAmount + interestCost;

    // Calculate potential profit
    const estimatedProfit = arv - totalCosts;
    const isGoodDeal = estimatedProfit > 0;

    setResult({
      isGoodDeal,
      estimatedProfit,
      breakdown: {
        totalCosts,
        interestCost,
        loanAmount,
      }
    });

    if (isGoodDeal) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }

    setShowForm(false);

    toast({
      title: isGoodDeal ? "Good Deal! 🎉" : "Not Recommended 😕",
      description: `Estimated profit: $${estimatedProfit.toLocaleString()}`,
      variant: isGoodDeal ? "default" : "destructive",
    });
  };

  return (
    <div className="rounded-2xl bg-black p-4 sm:p-6 pb-6 sm:pb-8 flex flex-col w-full sm:max-w-[368px] relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0">
          <ReactConfetti
            width={isMobile ? window.innerWidth - 32 : 368}
            height={600}
            recycle={false}
            numberOfPieces={200}
            gravity={0.2}
          />
        </div>
      )}
      
      <div className="flex flex-col font-poppins">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Deal Analyzer</h2>
        <p className="text-[#848484] mt-1 text-sm sm:text-base">Evaluate a deal quick and fast</p>
      </div>

      {showForm ? (
        <>
          <div className="mt-4 sm:mt-6 flex flex-col gap-3 text-[#848484] text-sm sm:text-[15px]">
            <div>
              <Input
                placeholder="Purchase Price"
                type="number"
                className="border-[#848484] bg-transparent text-white"
                onChange={(e) => handleInputChange("purchasePrice", e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5">
              <Input
                placeholder="ARV"
                type="number"
                className="border-[#848484] bg-transparent text-white"
                onChange={(e) => handleInputChange("arv", e.target.value)}
              />
              <Input
                placeholder="Rehab Budget"
                type="number"
                className="border-[#848484] bg-transparent text-white"
                onChange={(e) => handleInputChange("rehabBudget", e.target.value)}
              />
            </div>

            <div>
              <Input
                placeholder="Interest Rate %"
                type="number"
                className="border-[#848484] bg-transparent text-white"
                onChange={(e) => handleInputChange("interestRate", e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={calculateDeal}
            className="mt-4 sm:mt-6 rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-black font-semibold text-sm sm:text-base flex items-center justify-between"
          >
            <span>Calculate</span>
            <span className="rotate-180">→</span>
          </button>
        </>
      ) : result && (
        <>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-white/5 text-white">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Deal Breakdown</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-[#848484]">Purchase Price:</span>
                <span>${inputs.purchasePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#848484]">Rehab Budget:</span>
                <span>${inputs.rehabBudget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#848484]">Interest Cost:</span>
                <span>${result.breakdown.interestCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium border-t border-white/10 pt-2 mt-2">
                <span className="text-[#848484]">Total Costs:</span>
                <span>${result.breakdown.totalCosts.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-[#848484]">ARV:</span>
                <span>${inputs.arv.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold border-t border-white/10 pt-2 mt-2">
                <span>Estimated Profit:</span>
                <span className={result.isGoodDeal ? "text-green-400" : "text-red-400"}>
                  ${result.estimatedProfit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="mt-4 sm:mt-6 rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-black font-semibold text-sm sm:text-base flex items-center justify-between"
          >
            <span>Calculate New Deal</span>
            <span className="rotate-180">→</span>
          </button>
        </>
      )}
    </div>
  );
};

export default DealAnalyzer;
