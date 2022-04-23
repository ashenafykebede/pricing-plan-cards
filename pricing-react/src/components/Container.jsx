import { Card } from "./Card";

const plandetails1 = ['One Device','Unlimited Download','Editables Files','1GB Storage'];
const plandetails2 = ['One Device','Unlimited Download','300+ icon Package','Fully Editables Files','500GB Storage'];
const plandetails3 = ['12 Devices','Unlimited Download','3000+ icon Package','Fully Editables Files','2TB Storage','5TB Data Transfer'];

export const Container = () => {
  console.log("from container",plandetails1);
  return (
    <div className="container">
      <Card cls="card-1" plan="Free"        forr="For Individual"    price="80"  btn="submit2"  plandetails={plandetails2}/>
      <Card cls="card-2" plan="Pro"         forr="For Company"       price="80"  btn="submit2"  plandetails={plandetails2}/>
      <Card cls="card-3" plan="Enterprise"  forr="For Team"          price="180" btn="submit3"  plandetails={plandetails3}/>
    </div>
  )
};
