export const List = ({ plandetails }) => {
    console.log("From list",plandetails);
  return plandetails.map((plandetail) => (
    <div className="icon1">
      <i className="gg-check-o"></i>
      <h4>{plandetail}</h4>
    </div>
  ));
};
