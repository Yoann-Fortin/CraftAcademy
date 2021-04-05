const create = ({ singular = '', plural = '' } = {}) => Object.freeze({
  toString(number) {
    if(number === 1) {
      return singular;
    }
    return plural;
  },
}); 

export const Animal = {
  create,
  Rabbit: create({ singular: 'lapin', plural: 'lapins' }),
  Hedgehog: create({ singular: 'hérisson', plural: 'hérissons' }),
  Toad: create({ singular: 'crapaud', plural: 'crapauds' }),
  Fish: create({ singular: 'poisson', plural: 'poissons' }),
  Horse: create({ singular: 'cheval', plural: 'chevaux' }),
  Bird: create({ singular: 'oiseau', plural: 'oiseaux' }),
  Worm: create({ singular: 'ver', plural: 'vers' }),
};