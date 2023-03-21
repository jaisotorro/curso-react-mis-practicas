/**
 * Obten un valor aleatorio
 */
const random = (elements) => 
  elements[Math.floor(Math.random() * elements.length)];

/**
 * Obtiene un array aleatorio
 */
export const randomArray = (elements, number) => 
  elements.sort(() => 0.5 - Math.random()).slice(0, number);


export default random;