
import React from 'react';

interface Transaction {
  type: 'Receipt' | 'Invoice';
  amount: number;
  status: 'Paid' | 'Due' | 'Overdue';
}

interface DashRecentTransProps {
  transactions?: Transaction[];
}

const DashRecentTrans: React.FC<DashRecentTransProps> = ({ 
  transactions = [
    { type: 'Receipt', amount: 350.34, status: 'Paid' },
    { type: 'Invoice', amount: 890.00, status: 'Due' },
    { type: 'Receipt', amount: 1250.00, status: 'Overdue' },
  ]
}) => {
  const getStatusStyle = (status: Transaction['status']) => {
    switch (status) {
      case 'Paid':
        return 'bg-[#3578f6]/20 text-[#3578f6]';
      case 'Due':
        return 'bg-[#979797]/20 text-[#3f3f3f]';
      case 'Overdue':
        return 'bg-[#ec5936]/20 text-[#ec5936]';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {transactions.map((transaction, index) => (
        <div key={index} className="w-[368px] h-20 relative">
          <div className="w-[368px] h-20 left-0 top-0 absolute bg-white rounded-lg" />
          <div className="w-80 h-12 left-[24px] top-[16px] absolute justify-between items-center inline-flex">
            <div className="w-36 flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-6 text-black text-base font-medium font-poppins">
                {transaction.type}
              </div>
              <div className="self-stretch h-6">
                <span className="text-[#3f3f3f] text-sm font-medium font-poppins">Amount: </span>
                <span className="text-[#919191] text-sm font-medium font-poppins">
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="w-[72px] h-6 relative">
              <div className={`w-[72px] h-6 left-0 top-0 absolute ${getStatusStyle(transaction.status)} rounded-[18px]`} />
              <div className={`w-full h-6 flex items-center justify-center text-sm font-medium font-poppins`}>
                {transaction.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashRecentTrans;
