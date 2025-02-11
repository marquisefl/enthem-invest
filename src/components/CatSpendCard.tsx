
import React, { useState } from 'react';

interface SpendingCategory {
  name: string;
  amount: number;
  color: string;
}

const CatSpendCard = () => {
  const [timeFrame, setTimeFrame] = useState<'week' | 'month'>('month');
  
  const categories: SpendingCategory[] = [
    { name: 'Invoices', amount: 184, color: '#FF8A04' },
    { name: 'Labor', amount: 145, color: '#ec5936' },
    { name: 'Retail', amount: 111, color: '#3578f6' },
    { name: 'Other', amount: 160, color: '#000000' },
  ];

  return (
    <div className="w-full bg-white rounded-[20px] px-6 py-6 pb-10">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-10 flex-wrap">
          <h2 className="text-xl font-semibold font-poppins text-black flex-grow">
            Spending Overview
          </h2>
          <div className="flex items-center gap-2 min-w-[240px] text-sm font-inter">
            <button
              onClick={() => setTimeFrame('month')}
              className={`flex items-center gap-[11px] px-2 py-2 rounded-[100px] ${
                timeFrame === 'month'
                  ? 'bg-white shadow-[0px_5px_8px_rgba(0,0,0,0.1)]'
                  : 'border border-[#DEE1E2]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  timeFrame === 'month' ? 'bg-[#3578f6]' : 'bg-[#D9D9D9]'
                }`}
              />
              <span>Last 30 days</span>
            </button>
            <button
              onClick={() => setTimeFrame('week')}
              className={`flex items-center gap-[11px] px-2 py-2 rounded-[100px] ${
                timeFrame === 'week'
                  ? 'bg-white shadow-[0px_5px_8px_rgba(0,0,0,0.1)]'
                  : 'border border-[#DEE1E2]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  timeFrame === 'week' ? 'bg-[#3578f6]' : 'bg-[#D9D9D9]'
                }`}
              />
              <span>This Week</span>
            </button>
          </div>
        </div>

        <div className="flex items-end gap-[57px] mt-28 flex-wrap font-poppins text-sm">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center flex-1 min-w-[63px] pt-0.5 pb-0.5"
              style={{ color: category.color }}
            >
              <div
                className="w-full rounded-lg"
                style={{
                  backgroundColor: category.color,
                  height: `${category.amount}px`,
                }}
              />
              <span className="mt-[10px]">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatSpendCard;
