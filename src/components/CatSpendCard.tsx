
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
    <div className="w-full h-full bg-white rounded-[20px] px-5 py-5 box-border flex flex-col justify-between">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-base font-semibold text-black">
          Spending Overview
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setTimeFrame('month')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
              timeFrame === 'month'
                ? 'bg-white shadow-sm'
                : 'bg-gray-100'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                timeFrame === 'month' ? 'bg-[#3578f6]' : 'bg-gray-300'
              }`}
            />
            <span className="text-xs">Last 30 days</span>
          </button>
          <button
            onClick={() => setTimeFrame('week')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
              timeFrame === 'week'
                ? 'bg-white shadow-sm'
                : 'bg-gray-100'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                timeFrame === 'week' ? 'bg-[#3578f6]' : 'bg-gray-300'
              }`}
            />
            <span className="text-xs">This Week</span>
          </button>
        </div>
      </div>

      <div className="flex items-end justify-between w-full px-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-2"
            style={{ color: category.color }}
          >
            <div
              className="w-16 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: category.color,
                height: `${category.amount}px`,
              }}
            />
            <span className="text-xs">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatSpendCard;
