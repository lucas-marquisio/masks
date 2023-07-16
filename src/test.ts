import * as lib from './index'

console.log(`valor numerico: 12344, saida: ${lib.maskNumber('123333333')}`)
console.log(`valor data: 31012023, saida: ${lib.maskDate('31012023')}`)
console.log(`valor monetario: 33, saida: ${lib.maskCurrency('333')}`)
console.log(`valor cpf: 00000000000, saida: ${lib.maskCpf('00000000000')}`)
console.log(`valor cnpj: 000000000000000, saida: ${lib.maskCnpj('000000000000000')}`)
console.log(`valor celular: 5599999999999, saida: ${lib.maskPhone('55123456789')}`)
console.log(`valor cep: 5555555, saida: ${lib.maskCep('00000000')}`)
