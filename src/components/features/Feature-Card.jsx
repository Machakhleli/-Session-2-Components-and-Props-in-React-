function FeatureCard(props) {
  const { h3, p } = props;
  return (
    <div className="bg-[#fff] p-[1.25rem] mx-0 my-[.9375rem] border-l-solid border-l-[.25rem]
     border-l-[#007bff] rounded-[.25rem]">
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}
export default FeatureCard;
