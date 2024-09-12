'use client'

import { Package, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
    <CardPopularProducts />
    <CardSalesSummary />
    <CardPurchaseSummary />
    <CardExpenseSummary />
    <StatCard
      title="Customer * Expenses"
      primaryIcon={<Package className="text-blue-500 w-6 h-6" />}
      dataRange="22 - 29 June 2022"
      details={[
        {
          title: "Customer Growth",
          amount: "$5,000.00",
          changePercentage: 131,
          IconComponent: TrendingUp,
        },
        {
          title: "Expenses",
          amount: "10,000",
          changePercentage: -56,
          IconComponent: TrendingDown,
        }

      ]}  
    />
    <div className="row-span-3 bg-gray-500" />
    <div className="md:row-span-1  xl:row-span-2 bg-gray-500" />
    <div className="md:row-span-1  xl:row-span-2 bg-gray-500" />
    <div className="md:row-span-1  xl:row-span-2 bg-gray-500" />

  </div>

};

export default Dashboard

