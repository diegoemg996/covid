
//Función que capitaliza la primera letra de un string
export const upperCase = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
}