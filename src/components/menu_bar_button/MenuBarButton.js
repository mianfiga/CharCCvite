import "./MenuBarButton.css";

function MenuBarButton({ image, text }) {
  return (
    <>
      <div className="image_container">
        <img src={image} alt="add" />
        <span>{text}</span>
      </div>
    </>
  );
}

export default MenuBarButton;
