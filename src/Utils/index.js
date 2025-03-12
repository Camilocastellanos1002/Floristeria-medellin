/**
 * //totalPrice es una función que recibe un array de productos y devuelve el precio total de los productos seleccionados
 * 
 * @param {Array} products //Products es un array de objetos que contiene los productos seleccionados por el usuario
 * @returns  {Number} total //total es el precio total de los productos seleccionados
 */
function totalPrice (products,quantities) {

    let sum =0;
    products.forEach(
        element => {
            sum += element.price;
        }
    );
    return (
        sum
    );
}
export {totalPrice}