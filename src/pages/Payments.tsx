import PaymentsSearchAndFilters from "@/modules/payments/components/PaymentsSearchAndFilters/PaymentsSearchAndFilters";
import PaymentsStats from "@/modules/payments/components/PaymentsStats/PaymentsStats";
import { useState } from "react";

export interface IPaymentsFilters {
  tenant: string;
  property: string;
  currency: string;
  paymentMethod: string;
}

const PaymentsPage = () => {
  const [filters, setFilters] = useState<IPaymentsFilters>({
    tenant: "all",
    property: "all",
    currency: "all",
    paymentMethod: "all",
  });
  console.log({ filters });
  return (
    <div className="animate-fade-in">
      <PaymentsStats />
      <PaymentsSearchAndFilters filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default PaymentsPage;
