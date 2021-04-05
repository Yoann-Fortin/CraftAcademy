const create = ({ singular = '', plural = '' } = {}) => Object.freeze({
  toString(number) {
    if(number === 1) {
      return singular;
    }
    return plural;
  },
}); 

export const Color = {
  create,
  White: create({ singular: 'blanc', plural: 'blancs'}),
  Grey: create({ singular: 'gris', plural: 'gris' }),
  Green: create({ singular: 'vert', plural: 'verts' }),
  Red: create({ singular: 'rouge', plural: 'rouges' }),
  Brown: create({ singular: 'marron', plural: 'marrons' }),
  Blue: create({ singular: 'bleu', plural: 'bleus' }),
  Pink: create({ singular: 'rose', plural: 'roses' }),
};