const FeatureBox = ({ img, label }) => {
  return (
    <div className="home_feature_box">
      <div className="home_feature_img">
        <img src={img} alt="" />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default FeatureBox;
