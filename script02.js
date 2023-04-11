/*
2 - Crie uma classe FormaGeometrica com as propriedades largura e altura.
Adicione métodos para calcular a área e o perímetro da forma geométrica.
Instanciar a classe
*/

class FormaGeometrica{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    Calcular(){
        let area = this.largura * this.altura
        let perimetro = (this.largura*2)+(this.altura*2)
        console.log('AREA: ', area, 'PERIMETRO: ', perimetro)
    }
}

const quadrado = new FormaGeometrica(100, 100)

quadrado.Calcular()