import { Card } from "./Card";

const cards = [
  {
    cls: "card-1",
    plan: "Free",
    forr: "For Individual",
    price: "0",
    btn: "submit1",
    plandetails: [
      "One Device",
      "Unlimited Download",
      "Editables Files",
      "1GB Storage",
    ],
  },
  {
    cls: "card-2",
    plan: "Pro",
    forr: "For Company",
    price: "80",
    btn: "submit2",
    plandetails: [
      "6 Devices",
      "Unlimited Download",
      "300+ icon Package",
      "Fully Editables Files",
      "500GB Storage",
    ],
  },
  {
    cls: "card-3",
    plan: "Enterprise",
    forr: "For Teams",
    price: "180",
    btn: "submit3",
    plandetails: [
      "12 Devices",
      "Unlimited Download",
      "3000+ icon Package",
      "Fully Editables Files",
      "2TB Storage",
      "5TB Data Transfer",
    ],
  },
];
export const Container = () => {
  return (
    <div className="container">
      <Card card={cards[0]} />
      <Card card={cards[1]} />
      <Card card={cards[2]} />
    </div>
  );
};
