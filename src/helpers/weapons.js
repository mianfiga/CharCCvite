import { BLUDGE, PIERCE, SLASH } from "./damage_types";
import { D20, D6 } from "./dice";

let weapons = [
  {
    name: "Battleaxe",
    attackQDice: "1",
    attackDice: D20,
    attackSum: "5",
    damageQDice: "1",
    damageDice: D6,
    damageSum: "3",
    damageType: SLASH ,
  },
  {
    name: "Club",
    attackQDice: "1",
    attackDice: D20,
    attackSum: "2",
    damageQDice: "1",
    damageDice: D6,
    damageSum: "2",
    damageType: BLUDGE,
  },
  {
    name: "Crossbow (Hand)",
    attackQDice: "1",
    attackDice: D20,
    attackSum: "5",
    damageQDice: "1",
    damageDice: D6,
    damageSum: "3",
    damageType: PIERCE,
  },
  {
    name: "Crossbow (Heavy)",
    attackQDice: "1",
    attackDice:  D20 ,
    attackSum: "5",
    damageQDice: "1",
    damageDice: D6 ,
    damageSum: "3",
    damageType:  PIERCE ,
  },
];

export default weapons;
