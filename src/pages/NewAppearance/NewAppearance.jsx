import React from "react";
import "./NewAppearance.css";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import MenuBar from "../../components/menu_bar/MenuBar";
import { NEXT, PREVIOUS } from "../../helpers/utility_icons";
import HeadCarousel from "../../components/head_carousel/HeadCarousel";

function NewAppearance() {
  return (
    <>
      <div className="new_appearance_container">
        <div className="new_appearance_title">
            <span>APPEARANCE</span>
        </div>
        <div className="new_appearance_head_slider">
          <HeadCarousel />
        </div>
        <NewGoTo />
        <a href="/new_3" className="previous_new">
          <img src={PREVIOUS} alt="" />
        </a>
        <a href="/new_4" className="next_new">
          <img src={NEXT} alt="" />
        </a>
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewAppearance;
