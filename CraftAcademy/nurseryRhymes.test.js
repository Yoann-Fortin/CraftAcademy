import { expect, xtest } from '@jest/globals';
import { AnimalSong } from './index';

describe('Animals', () => {
  test('verse 1', () => {
    expect(AnimalSong().verse(1)).toEqual(`1 petit lapin blanc sautant sur le chemin
Rencontre 1 autre petit lapin blanc
2 petits lapins blancs sont devenus copains.
`);
  });

  test('verse 2', () => {
    expect(AnimalSong().verse(2)).toEqual(`2 petits hérissons gris marchant sur le chemin
Rencontrent 1 autre petit hérisson gris
3 petits hérissons gris sont devenus copains.
`);
  });

  test('verse 7', () => {
    expect(AnimalSong().verse(7)).toEqual(`7 petits vers roses rampant sous le chemin
Rencontrent 1 autre petit ver rose
8 doigts avec mes mains, pour compter les petits vers roses.
`);
  });

  test('whole song', () => {
    const expected = `1 petit lapin blanc sautant sur le chemin
Rencontre 1 autre petit lapin blanc
2 petits lapins blancs sont devenus copains.

2 petits hérissons gris marchant sur le chemin
Rencontrent 1 autre petit hérisson gris
3 petits hérissons gris sont devenus copains.

3 petits crapauds verts bondissant au-dessus de la rivière
Rencontrent 1 autre petit crapaud vert
4 petits crapauds verts sont devenus copains.

4 petits poissons rouges nageant dans la rivière
Rencontrent 1 autre petit poisson rouge
5 petits poissons rouges sont devenus copains.

5 petits chevaux marrons galopant sur le chemin
Rencontrent 1 autre petit cheval marron
6 petits chevaux marrons sont devenus copains.

6 petits oiseaux bleus volant au-dessus du chemin
Rencontrent 1 autre petit oiseau bleu
7 petits oiseaux bleus sont devenus copains.

7 petits vers roses rampant sous le chemin
Rencontrent 1 autre petit ver rose
8 doigts avec mes mains, pour compter les petits vers roses.
`;
    expect(AnimalSong().song()).toBe(expected);
  });
});