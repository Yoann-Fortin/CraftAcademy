import { Color } from "./color";
import { Animal } from "./animal";
import { MoveAction } from "./moveAction";
import { AnimalGroup } from "./animalGroup";
import { Place } from "./place";

const action = ({ number, metGroup }) => {
  if(number === 1){
    return `Rencontre 1 autre ${metGroup}`;
  }
  return `Rencontrent 1 autre ${metGroup}`;
}

const conclusion = (group) => {
  const newGroup = group.addAnimal();
  if(newGroup.count === 8){
    return `8 doigts avec mes mains, pour compter les ${newGroup}.`
  }
  return `${newGroup.count} ${newGroup} sont devenus copains.`
}

const create = ({
  number = 1,
  color = Color.White,
  animal = Animal.Rabbit,
  moveAction = MoveAction.Jumping,
  place = Place.OnTheWay,
} = {}) => {
  const group = AnimalGroup.create({ number, color, animal });
  const metGroup = AnimalGroup.create({ number: 1, color, animal });
  const theAction = action({ number, metGroup });
  const theConclusion = conclusion(group);

  return Object.freeze({
    toString() {
      return `${number} ${group} ${moveAction} ${place}
${theAction}
${theConclusion}
`;
    },
  });
};

const factory = (number) => {
  switch (number){
    case 2:
      return create({
        number,
        animal: Animal.Hedgehog,
        color: Color.Grey,
        moveAction: MoveAction.Walking,
        place: Place.OnTheWay,
      });
    case 3:
      return create({
        number,
        animal: Animal.Toad,
        color: Color.Green,
        moveAction: MoveAction.Leaping,
        place: Place.AboveTheRiver,
      });
    case 4:
      return create({
        number,
        animal: Animal.Fish,
        color: Color.Red,
        moveAction: MoveAction.Swimming,
        place: Place.InTheRiver,
      });
    case 5:
      return create({
        number,
        animal: Animal.Horse,
        color: Color.Brown,
        moveAction: MoveAction.Galloping,
        place: Place.OnTheWay,
      });
    case 6:
      return create({
        number,
        animal: Animal.Bird,
        color: Color.Blue,
        moveAction: MoveAction.Flying,
        place: Place.AboveTheWay,
      });
    case 7:
      return create({
        number,
        animal: Animal.Worm,
        color: Color.Pink,
        moveAction: MoveAction.Crawling,
        place: Place.UnderTheWay,
      });
    default:
      return create({
        number,
        animal: Animal.Rabbit,
        color: Color.White,
        moveAction: MoveAction.Jumping,
        place: Place.OnTheWay,
      });
  }
}

export const AnimalsMeeting = {
  factory,
};
