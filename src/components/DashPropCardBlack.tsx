
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface DashPropCardBlackProps {
  propertyName: string;
  currentBudget: number;
  totalBudget: number;
  isActive?: boolean;
}

const DashPropCardBlack: React.FC<DashPropCardBlackProps> = ({
  propertyName,
  currentBudget,
  totalBudget,
  isActive = true,
}) => {
  const budgetPercentage = (currentBudget / totalBudget) * 100;
  const isBudgetExceeded = currentBudget > totalBudget;
  const progressColor = isBudgetExceeded ? '#ec5936' : '#2CFF3A';

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTotalBudget = (amount: number) => {
    return amount >= 1000 ? `${amount/1000}k` : amount;
  };

  return (
    <div className="w-[352px] h-[200px] relative">
      <div className="w-[352px] h-[200px] left-0 top-0 absolute bg-black rounded-[20px]">
        <div className="w-[304px] h-[152px] left-[24px] top-[16px] absolute flex-col justify-start items-start gap-[52px] inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="w-20 h-6 text-[#838383] text-lg font-semibold font-poppins">
              {propertyName}
            </div>
            <div className="w-[72px] h-6 px-2 py-px bg-white/20 rounded-[18px] justify-center items-center gap-[5px] flex">
              <div className={`w-1.5 h-1.5 ${isActive ? 'bg-[#2cff3a]' : 'bg-red-500'} rounded-full`} />
              <div className="w-11 text-white text-sm font-medium font-poppins">
                {isActive ? 'Active' : 'Inactive'}
              </div>
            </div>
          </div>
          
          <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch h-4 text-white text-sm font-medium font-poppins">
              Budget
            </div>
            <div className="self-stretch grow shrink basis-0 justify-between items-end inline-flex">
              <div className="w-32 h-8 text-white text-[32px] font-medium font-poppins">
                {formatCurrency(currentBudget)}
              </div>
              <div className="w-[127px] h-6 text-[#838383] text-xl font-medium font-poppins">
                /${formatTotalBudget(totalBudget)}
              </div>
            </div>
            <div className="w-[302px] h-1 relative">
              <div className="w-[302px] h-1 left-0 top-0 absolute bg-white/20 rounded-[100px]" />
              <div 
                className="h-1 left-0 top-0 absolute rounded-[100px] transition-all duration-300"
                style={{
                  width: `${Math.min(budgetPercentage, 100)}%`,
                  backgroundColor: progressColor
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPropCardBlack;
