
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
    <div className="flex flex-col gap-2 w-full">
      {transactions.map((transaction, index) => (
        <div key={index} className="w-full bg-white rounded-lg h-20 flex items-center px-6">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex flex-col items-start">
              <div className="text-black text-base font-medium font-poppins">
                {transaction.type}
              </div>
              <div>
                <span className="text-[#3f3f3f] text-sm font-medium font-poppins">Amount: </span>
                <span className="text-[#919191] text-sm font-medium font-poppins">
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
            <div className={`w-[72px] h-6 ${getStatusStyle(transaction.status)} rounded-[18px] flex items-center justify-center`}>
              <span className="text-sm font-medium font-poppins">
                {transaction.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashRecentTrans;
