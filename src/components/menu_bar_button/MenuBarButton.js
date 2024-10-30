import "./MenuBarButton.css";

function MenuBarButton({ image, text }) {
  return (
    <>
      <div className="bar_button_container">
        <div className="bar_image_container">
          <img src={image} alt="add" />
        </div>
        <span>{text}</span>
      </div>
    </>
  );
}

export default MenuBarButton;
