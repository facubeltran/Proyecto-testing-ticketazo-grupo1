export function generarEmailRandom() {
    const tiempoActual = Date.now();
    return `test${tiempoActual}@gmail.com`;
}
export function generarNumeroRandom() {
    const numero = Math.floor(Math.random() * 900000000) + 100000000;
    return numero.toString();
}