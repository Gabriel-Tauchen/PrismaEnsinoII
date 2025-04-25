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
    
//omit:{} Especifica quais propriedades serão excluídas no retorno.
async function main() {
    const seres = await prisma.ser.findMany({omit:{nome: true}})
    
    seres.forEach(s => {console.log(s.nome + " " + s.tipo)})
}
    

main()