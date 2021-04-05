const create = ({ place = '' } = {}) => {
  return place; 
}; 

export const Place = {
  create,
  OnTheWay: create({ place: 'sur le chemin' }),
  AboveTheRiver: create({ place: 'au-dessus de la rivière' }),
  InTheRiver: create({ place: 'dans la rivière' }),
  AboveTheWay: create({ place: 'au-dessus du chemin' }),
  UnderTheWay: create({ place: 'sous le chemin' }),
};