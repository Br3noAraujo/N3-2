/*
3 - Para a situação acima, criar uma exception que dispara um erro quando o valor
passado não for um número. Testar uma situação com erro e uma sem erro.
*/

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
        if (isNaN(area) || isNaN(perimetro)){
            throw new Error('UM DOS VALORES NÃO É UM NÚMERO')
        }
        console.log('AREA: ', area, 'PERIMETRO: ', perimetro)

    }
}

const quadrado = new FormaGeometrica(100, 'breno')

try {
    quadrado.Calcular()
}
catch (e) {
    console.error(e);
}
  