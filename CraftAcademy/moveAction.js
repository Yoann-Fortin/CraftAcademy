const create = ({ action = '' } = {}) => {
  return action; 
}; 

export const MoveAction = {
  create,
  Jumping: create({ action: 'sautant' }),
  Walking: create({ action: 'marchant' }),
  Leaping: create({ action: 'bondissant' }),
  Swimming: create({ action: 'nageant' }),
  Galloping: create({ action: 'galopant' }),
  Flying: create({ action: 'volant' }),
  Crawling: create({ action: 'rampant' }),
};