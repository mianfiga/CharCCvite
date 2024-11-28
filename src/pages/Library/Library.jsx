import React from "react";
import "./Library.css";
import MenuBar from "../../components/menu_bar/MenuBar";

function Library() {
  return (
    <>
      <div className="library_container">
        <div className="library_title">
          <span>LIBRARY</span>
        </div>
        <MenuBar selectedButton={"LIBRARY"} />
      </div>
    </>
  );
}

export default Library;
