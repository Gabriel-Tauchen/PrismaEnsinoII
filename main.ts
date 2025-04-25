import { PrismaClient} from './generated/prisma'
const prisma = new PrismaClient()

// //findMany() retorna todos os registros da tabela ser, e para cada registro encontrado, imprime o nome e o tipo do ser.
// async function main() {
//     const seres = await prisma.ser.findMany()
//     seres.forEach(s => {
//     console.log(s.nome + " ", s.tipo)})
// }

//FindFist() retorna o primeiro registro da tabela ser, e imprime o nome e o tipo do ser.
async function main() {
    const s = await prisma.ser.findFirst()
    if (s != null ){
     console.log(s.nome + " ", s.tipo)
    }
}
    

main()