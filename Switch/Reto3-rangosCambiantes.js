const limSuperior = 15
const limInferior = 10
const limComparacion = 1

if (limComparacion < limSuperior && limComparacion > limInferior) {
    console.log('Dentro del rango')
} else if (limComparacion > limSuperior || limComparacion < limInferior) {
    console.log('Fuera del rango')
}