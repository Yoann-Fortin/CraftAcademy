import { AnimalsMeeting } from "./animalsMeeting";

export const AnimalSong = () => {
  return {
    verse(number) {
      const animalsMeeting = AnimalsMeeting.factory(number);
      return `${animalsMeeting}`;
    },
    song() {
      let song = '';
      for (let i = 1; i < 8; i++){
        song += `${this.verse(i)}${i < 7 ? '\n' : ''}`
      }
      return song;
    }
  };
};