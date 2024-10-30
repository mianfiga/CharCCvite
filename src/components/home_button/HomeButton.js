import "./HomeButton.css";

function HomeButton({ image, text }) {
  return (
    <div className="button_container">
      <img src={image} alt="icon" />
      <span>{text}</span>
    </div>
  );
}

export default HomeButton;
