
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
    { type: 'Invoice', amount: 475.50, status: 'Due' },
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
    <div className="flex flex-col gap-6 h-full w-full box-border">
      {transactions.map((transaction, index) => (
        <div key={index} className="w-full bg-white rounded-lg h-[72px] flex items-center px-5">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex flex-col items-start">
              <div className="text-black text-sm font-medium font-poppins mb-0.5">
                {transaction.type}
              </div>
              <div>
                <span className="text-[#3f3f3f] text-xs font-medium font-poppins">Amount: </span>
                <span className="text-[#919191] text-xs font-medium font-poppins">
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
            <div className={`min-w-[60px] text-center px-2.5 py-0.5 rounded-full ${getStatusStyle(transaction.status)}`}>
              <span className="text-xs font-medium">
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
