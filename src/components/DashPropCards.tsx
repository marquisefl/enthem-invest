
import React, { useEffect, useState } from 'react';

interface PropertyCardProps {
  propertyName: string;
  currentBudget: number;
  totalBudget: number;
  isActive?: boolean;
  variant: 'black' | 'white';
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  propertyName,
  currentBudget,
  totalBudget,
  isActive = true,
  variant
}) => {
  const [progress, setProgress] = useState(0);
  const budgetPercentage = (currentBudget / totalBudget) * 100;
  const isBudgetExceeded = currentBudget > totalBudget;
  const progressColor = isBudgetExceeded ? '#ec5936' : '#2CFF3A';

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(budgetPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [budgetPercentage]);

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

  const isBlack = variant === 'black';

  return (
    <div className={`w-full ${isBlack ? 'bg-black' : 'bg-white'} rounded-[20px] p-5`}>
      <div className="flex justify-between items-center mb-10">
        <div className="text-base font-medium text-[#838383]">
          {propertyName}
        </div>
        <div className={`px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
          isBlack ? 'bg-white/20' : 'bg-black'
        }`}>
          <div className="w-1 h-1 bg-[#2cff3a] rounded-full" />
          <span className="text-white text-xs">Active</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <div className={`text-sm font-medium ${isBlack ? 'text-white' : 'text-[#030303]'}`}>
          Budget
        </div>
        <div className="flex justify-between items-end">
          <div className={`text-[32px] font-medium ${isBlack ? 'text-white' : 'text-black'}`}>
            {formatCurrency(currentBudget)}
          </div>
          <div className="text-[#838383] text-xl">
            /${formatTotalBudget(totalBudget)}
          </div>
        </div>
        <div className="w-full h-1 relative">
          <div className={`w-full h-full absolute ${isBlack ? 'bg-white/20' : 'bg-[#6e6e6e]/20'} rounded-full`} />
          <div 
            className="h-full absolute rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(progress, 100)}%`,
              backgroundColor: progressColor
            }}
          />
        </div>
      </div>
    </div>
  );
};

const DashPropCards = () => {
  return (
    <div className="flex flex-col gap-4">
      <PropertyCard
        propertyName="Eagle Dr"
        currentBudget={22950}
        totalBudget={40000}
        isActive={true}
        variant="black"
      />
      <PropertyCard
        propertyName="Highway Ln"
        currentBudget={25110}
        totalBudget={20000}
        isActive={true}
        variant="white"
      />
    </div>
  );
};

export default DashPropCards;
