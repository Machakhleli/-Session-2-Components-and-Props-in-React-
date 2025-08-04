function FeatureCard(props) {
  const { h3, p } = props;
  return (
    <div className="feature">
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}
export default FeatureCard;
