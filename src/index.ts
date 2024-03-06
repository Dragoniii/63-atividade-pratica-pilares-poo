import {Normal, Vip, Camarote} from './atividades/01'
import {Novo, Velho} from './atividades/02'
import {Animal, Cachorro, Cavalo, Gato} from './atividades/03'

const meuAnimal = new Animal ('Dragonii', 15, 5)
const meuCachorro = new Cachorro ('Dragonii', 15, 5)
const meuCavalo = new Cavalo ('Dragonii', 15, 5)
const meuGato = new Gato ('Dragonii', 15, 5)

meuAnimal.comer()
meuCachorro.latir()
meuCavalo.galopar()
meuGato.miar()

console.log(` `)

const ingressoNormal = new Normal (50)
const ingressoVip = new Vip (50, 25)
const ingressoCamarote = new Camarote (50, 100)

ingressoNormal.imprimeValor()
ingressoVip.imprimeValor()
ingressoCamarote.imprimeValor()

console.log(` `)

const imovelNovo = new Novo (100000, 'Rua da Lagoa, 1315', 20000) 
const imovelVelho = new Velho (100000, 'Rua da Lagoa, 1315', 20000) 

imovelNovo.imprimeDetalhes()
imovelVelho.imprimeDetalhes()