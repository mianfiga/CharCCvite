import { useState, useEffect } from "react";
import "./NewProficiencies.css";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import MenuBar from "../../components/menu_bar/MenuBar";
import { NEXT, PREVIOUS } from "../../helpers/utility_icons";
import Checkbox from "antd/es/checkbox/Checkbox";
import skill_proficiencies from "../../helpers/skill_proficiencies";
import languages from "../../helpers/languages";

function NewProficiencies() {

  const [selectedProficiencies, setSelectedProficiencies] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    const savedProficiencies =
      JSON.parse(localStorage.getItem("character_proficiencies")) || [];
    const savedLanguages =
      JSON.parse(localStorage.getItem("character_languages")) || [];

    setSelectedProficiencies(savedProficiencies);
    setSelectedLanguages(savedLanguages);
  }, []);

  const handleProficiencyChange = (checked, name) => {
    setSelectedProficiencies((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );
  };

  const handleLanguageChange = (checked, name) => {
    setSelectedLanguages((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );
  };

  const handleSave = () => {
    localStorage.setItem(
      "character_proficiencies",
      JSON.stringify(selectedProficiencies)
    );
    localStorage.setItem(
      "character_languages",
      JSON.stringify(selectedLanguages)
    );
  };

  return (
    <>
      <div className="new_proficiencies_container">
        <div className="new_proficiencies_title">
          <span>PROFICIENCIES</span>
        </div>
        <span className="new_proficiencies_header">
          SKILL PROFICIENCIES (SELECT 2)
        </span>
        <div className="new_proficiencies_checkboxes">
          {skill_proficiencies.map((s) => (
            <Checkbox
              key={s.name}
              style={{ transform: "scale(1.8)" }}
              checked={selectedProficiencies.includes(s.name)}
              onChange={(e) =>
                handleProficiencyChange(e.target.checked, s.name)
              }
            >
              <div className="checkbox_span">
                <img className="checkbox_img" src={s.icon} alt="" />
                <span>{s.name}</span>
              </div>
            </Checkbox>
          ))}
        </div>
        <span className="new_proficiencies_header">LANGUAGES (SELECT 2)</span>
        <div className="new_languages_checkboxes">
          {languages.map((l) => (
            <Checkbox
              key={l.name}
              style={{ transform: "scale(1.5)" }}
              checked={selectedLanguages.includes(l.name)}
              onChange={(e) => handleLanguageChange(e.target.checked, l.name)}
            >
              <div className="checkbox_span">
                <span>{l.name}</span>
              </div>
            </Checkbox>
          ))}
        </div>
        <a href="/new_2" className="previous_new">
          <img src={PREVIOUS} alt="previous" />
        </a>
        <a href="/new_4" className="next_new" onClick={handleSave}>
          <img src={NEXT} alt="next" />
        </a>
        <NewGoTo />
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewProficiencies;
