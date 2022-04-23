import { Button } from "./Button";
import { List }  from "./List";

export const Card = ({cls,plan,forr,price,btn,plandetails}) => {
  console.log("from card:",plandetails);
  return (
    <div className={cls}>
      <h3>{plan}</h3>
      <p>{forr}</p>
      <h2>${price}</h2>
      <List plandetails={plandetails}/>     
      <Button cls={btn} name="Subscribe"/>
    </div>
  );
};
