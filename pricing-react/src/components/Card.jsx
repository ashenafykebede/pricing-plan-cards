import { Button } from "./Button";
import { List }  from "./List";

export const Card = ({card}) => {
  console.log(card);
  console.log("details",card.plandetails);
  return (
    <div className={card.cls}>
      <h3>{card.plan}</h3>
      <p>{card.forr}</p>
      <h2>${card.price}</h2>
      <List plandetails={card.plandetails}/>     
      <Button cls={card.btn} name="Subscribe"/>
    </div>
  );
};
