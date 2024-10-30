import "./MenuBar.css"
import { HOME, NEW, EXPLORE, LIBRARY, SETTINGS, TNEW, THOME, TEXPLORE, SELHOME, TLIBRARY, TSETTINGS, SELNEW, SELEXPLORE, SELLIBRARY, SELSETTINGS } from "../../helpers/menu_bar_icons.js"
import MenuBarButton from "../menu_bar_button/MenuBarButton.js";

function MenuBar() {
    return (
        <>
            <div className="bar_container">
                <MenuBarButton image={NEW} text={TNEW} />
                <MenuBarButton image={EXPLORE} text={TEXPLORE} />
                <MenuBarButton image={HOME} text={THOME} />
                <MenuBarButton image={LIBRARY} text={TLIBRARY} />
                <MenuBarButton image={SETTINGS} text={TSETTINGS} />
            </div>
        </>
    )
}

export default MenuBar;