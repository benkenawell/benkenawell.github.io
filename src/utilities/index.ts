
/**
 * Creates the string to be used for anchor text.  Created like this so it's easily reproducible
 * @param {string} text 
 */
const createAnchor = (text: string): string => 
  text.toLowerCase().replace(" ", "");


const assertNever = (x: never) => {
  throw new Error("assertNever didn't work!");
}

export {createAnchor, assertNever};