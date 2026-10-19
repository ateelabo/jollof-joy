import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        <div>
          <OrderSummary />
        </div>

      </div>
    </main>
  );
}