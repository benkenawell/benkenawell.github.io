
/**
 * Creates the string to be used for anchor text.  Created like this so it's easily reproducible
 * @param {string} text 
 */
const createAnchor = (text) => {
  text.toLowerCase().replaceAll(" ", "");
}

export {createAnchor};