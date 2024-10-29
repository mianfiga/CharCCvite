import MenuBar from "../../components/menu_bar/MenuBar.js";
import "./Home.css";
import HomeButton from "../../components/home_button/HomeButton.js";
import { THROWS, STATS, INFO, ACTIONS, LEVELUP, EQUIPMENT } from "../../helpers/home_icons.js";

function Home() {
    return (
        <>
            <div className="home_container">
                <div className="home_content">
                    <HomeButton image={THROWS}/>
                    <HomeButton image={STATS}/>
                    <HomeButton image={INFO}/>
                    <HomeButton image={ACTIONS}/>
                    <HomeButton image={LEVELUP}/>
                    <HomeButton image={EQUIPMENT}/>
                </div>
                
            <MenuBar />
                
            </div>
        </>
    )
}

export default Home;