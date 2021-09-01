
//Función que agrega comas a los numeros
export const addCommas = (x)=> {
    if (x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        return " ";
    }
}