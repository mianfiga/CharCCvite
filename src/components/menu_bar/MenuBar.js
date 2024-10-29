import "./MenuBar.css"
import { NEW, EXPLORE, HOME, LIBRARY, SETTINGS } from "../../helpers/menu_bar_icons.js"

function MenuBar() {
    return (
        <>
            <div className="bar_container">
                <div className="image_container">
                    <img src={NEW} alt="add" />
                    <span>New</span>
                </div>
                <div className="image_container">
                    <img src={EXPLORE} alt="add" />
                    <span>Explore</span>
                </div>
                <div className="image_container">
                    <img src={HOME} alt="add" />
                    <span>Home</span>
                </div>
                <div className="image_container">
                    <img src={LIBRARY} alt="add" />
                    <span>Library</span>
                </div>
                <div className="image_container">
                    <img src={SETTINGS} alt="add" />
                    <span>Settings</span>
                </div>
            </div>
        </>
    )
}

export default MenuBar;