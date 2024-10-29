import "./HomeButton.css";

function HomeButton({ image }) {
  return (
    <div className="button_container">
      <img src={image} alt="icon" />
    </div>
  );
}

export default HomeButton;
