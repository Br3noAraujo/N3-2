/*
1 - Crie uma classe Funcionário com as propriedades nome, salário e cargo.
Adicione métodos para calcular o imposto de renda a ser pago pelo funcionário e
exibir o salário líquido. Sabendo-se que O método calcularImpostoDeRenda calcula
o imposto de renda a ser pago pelo funcionário com base em seu salário bruto. Criar
uma instancia para cada situação.
salario <= 1903.98 o imposto = 0;
salario <= 2826.65 o imposto = (salario * 0.075) - 142.80;
salario <= 3751.05 o imposto = (salario * 0.15) - 354.80;
salario <= 4664.68 0 imposto = (salario * 0.225) - 636.13;
se o sálário for acima de 4664.68 o imposto = (salario * 0.275) - 869.36;
O método salário líquido, exibe o salário subtraindo-se os descontos.
*/

class Funcionario {
    constructor(nome, salario, cargo){
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    
    CalcularImposto(){
        if(this.salario <= 1903.98){
            let imposto = 0   
            this.imposto = imposto
        }
        if(this.salario <= 2826.65){
            let imposto = (this.salario * 0.075) - 142.80;
            this.imposto =  imposto
        }
        if(this.salario <= 3751.05){
            let imposto = (this.salario * 0.15) - 354.80
            this.imposto = imposto
        }
        if(this.salario <= 4664.68){
            let imposto = (this.salario * 0.225) - 636.13
            this.imposto = imposto
        }
        if(this.salario > 4664.68){
            let imposto = (this.salario * 0.275) - 869.36
            this.imposto =  imposto   
        }
        console.log(this.salario-this.imposto)
    }
}

const joao = new Funcionario('joão', 3000, 'Cargo Foda')

joao.CalcularImposto()