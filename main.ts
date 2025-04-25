import { PrismaClient} from './generated/prisma'
const prisma = new PrismaClient()

// //findMany() retorna todos os registros da tabela ser, e para cada registro encontrado, imprime o nome e o tipo do ser.
// async function main() {
//     const seres = await prisma.ser.findMany()
//     seres.forEach(s => {
//     console.log(s.nome + " ", s.tipo)})
// }

// //FindFist() retorna o primeiro registro da tabela ser, e imprime o nome e o tipo do ser.
// async function main() {
//     const s = await prisma.ser.findFirst()
//     if (s != null ){
//      console.log(s.nome + " ", s.tipo)
//     }
// }

// //select{} Especifica quais propriedades serão incluídas no retorno
// async function main() {
//     const seres = await prisma.ser.findMany({
//      select:{nome: true}})
//     seres.forEach(s => {
//      console.log(s.nome + " " + s.tipo)})
// }

// //select:{} pode incluir relacionamentos
// async function main() {
//     const seres = await prisma.ser.findMany({
//         select:{
//         nome: true,
//         artefatos :{
//         select:{nome: true}}}})

//     seres.forEach(s => {
//         console.log("ser:"+s.nome)
//         s.artefatos.forEach(a =>{console.log("artefato:"+a.nome)})})
//     }
    
// //omit:{} Especifica quais propriedades serão excluídas no retorno.
// async function main() {
//     const seres = await prisma.ser.findMany({omit:{nome: true}})
    
//     seres.forEach(s => {console.log(s.nome + " " + s.tipo)})
// }

// // include:{} quais relações são carregadas no retorno
// async function main() {
//     const seres = await prisma.ser.findMany({include:{artefatos: true}})
    
//     seres.forEach(s => {
//      console.log(s.nome)
//      s.artefatos.forEach(a =>{console.log("artefato:"+a.nome+" "+a.destruido)})})
// }
    
// //Where
// async function main() {
//     const ativos = await prisma.artefato.findMany({
//         where: {
//             destruido: false,
//         },})
//     console.table(ativos)
// }
   
// //Where - AND implícito
// async function main() {
//     const artefatos= await prisma.artefato.findMany({
//         where: {
//             destruido: false,
//             objeto: 'martelo',
//         },})
//     console.table(artefatos)
// }
   
// //Where - AND explícito
// async function main() {
//     const artefatos = await prisma.artefato.findMany({
//         where: {
//             AND: [
//                 { destruido: false },
//                 { objeto: 'martelo' },
//             ]
//         }})
//     console.table(artefatos)
// }
   
// //Where OR
// async function main() {
//     const poderes = await prisma.poder.findMany({
//         select: {
//             nome: true,
//             descricao: true,
//         },
//         where: {
//             OR: [
//                 { nome: 'invocação' },
//                 { nome: 'vôo' },
//             ]
//         }})
//     console.table(poderes)
// }

// //Where
// async function main() {
//     const poderes = await prisma.poder.findMany({
//         where: {
//         nome: {
//             contains: 'ele',
//             mode: 'insensitive',
//         }
//     }})
//     console.table(poderes)
// }

// // Groupe By
// async function main() {
//     const podDiv = await prisma.poderDivindade.groupBy({
//        by: ['serNome'],
//             _count: {
//                 poderId: true,
//             }})
//      console.table(podDiv)
// }
    
// //Order By
// async function main() {
//     const podDiv = await prisma.artefatoPoder.groupBy({
//     by: ['artefatoNome'],
//         _count: {
//             poderId: true,
//         },
//     orderBy: {
//         _count: {
//             poderId: 'desc',
//         }}})
//     console.table(podDiv )
// }

//Having
async function main() {
    const podDiv = await prisma.poderDivindade.groupBy({
        by: ['serNome'],
            _count: {
                poderId: true,
            },
        having: {
            serNome: {
                _count: {
                    gt: 3,
        }}}})
   console.table(podDiv)
}
   

main()