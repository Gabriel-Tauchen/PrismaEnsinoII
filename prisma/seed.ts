import { PrismaClient} from '../generated/prisma'
const prisma = new PrismaClient()
async function main() {
 console.log('Iniciando o seed...')
 const tecido = await prisma.poder.create({data:
   {nome: 'tecido denso',descricao: 'torna mais forte'}})
 const longe = await prisma.poder.create({data:
   {nome: 'longevidade',descricao: 'evelhecimento muito lento'}})
 const cura = await prisma.poder.create({data:
   {nome: 'fator de cura',descricao: 'recuperação dos ferimentos'}})
 const eletrica = await prisma.poder.create({data:
   {nome: 'eletricidade instantânea',descricao: 'concentra raios elétricos'}})
 const allspeak = await prisma.poder.create({data:
   {nome: 'allspeak',descricao: 'comunicar-se em todos os idiomas'}})
 const disfarce = await prisma.poder.create({data:
   {nome: 'disfarce',descricao: 'muda aparência'}})
 const invoca = await prisma.poder.create({data:
   {nome: 'invocação',descricao: 'retorno do objeto à mão'}})
 const voo = await prisma.poder.create({data:
   {nome: 'vôo',descricao: 'deslocar sobre o ar'}})  
 const bifrost = await prisma.poder.create({data:
   {nome: 'energia de Bifrost',descricao: 'conjura um portal'}})  
 const escuridao = await prisma.poder.create({data:
   {nome: 'escuridão viva',descricao: 'permite controlar a escuridão'}})
 const blacke = await prisma.ser.create({data:
   {nome: 'Don Blake', sexo: 'Masculino', morto: false, tipo: 'MORTAL', raca:'humano', profissao:'médico'}})
 const jane = await prisma.ser.create({data:
   {nome: 'Jane Foster', sexo: 'Feminino', morto: true, tipo: 'MORTAL', raca:'humano', profissao:'astrofísica'}})
 const bill = await prisma.ser.create({data:
   {nome: 'Bill Raio Beta', sexo: 'Masculino', morto: false, tipo: 'MORTAL', raca:'Korbinita', profissao:'caçador de recompensas'}})
 const gorr = await prisma.ser.create({data:
   {nome: 'Gorr', sexo: 'Masculino', morto: true, tipo: 'MORTAL', raca:'Klyntar', profissao:'camponês'}})
 const odin = await prisma.ser.create({data:
   {nome: 'Odin', sexo: 'Masculino', morto: true, tipo: 'DIVINDADE', restituirVita: false, fraqueza: 'tempo sem dormir', designacao: 'protetor dos reinos'}, })
 const thor = await prisma.ser.create({data:
   {nome: 'Thor', sexo: 'Masculino', morto: false, tipo: 'DIVINDADE', restituirVita: false, fraqueza: 'tornar não digno', designacao: 'deus do trovão', nomeMortal: blacke.nome}})
 const freya = await prisma.ser.create({data:
   {nome: 'Freya', sexo: 'feminino', morto: false, tipo: 'DIVINDADE', restituirVita: false, fraqueza: 'flor Lobelia', designacao: 'deusa do amor'}})
 const loki = await prisma.ser.create({data:
   {nome: 'Loki', sexo: 'Masculino', morto: false, tipo: 'DIVINDADE', restituirVita: false, fraqueza: 'imerso na água', designacao: 'deus da trapaça'}})
 const filhos = await prisma.serSer.createMany({data: [
   {nomeResponsavel:odin.nome, nomeFilho: thor.nome},
   {nomeResponsavel:freya.nome, nomeFilho: thor.nome},
   {nomeResponsavel:odin.nome, nomeFilho: loki.nome},
   {nomeResponsavel:freya.nome, nomeFilho: loki.nome}]})
 const poderDiv = await prisma.poderDivindade.createMany({data: [
   {serNome:odin.nome, poderId: tecido.idPoder},
   {serNome:odin.nome, poderId: longe.idPoder},
   {serNome:odin.nome, poderId: cura.idPoder},
   {serNome:thor.nome, poderId: tecido.idPoder},
   {serNome:thor.nome, poderId: longe.idPoder},
   {serNome:thor.nome, poderId: cura.idPoder},
   {serNome:thor.nome, poderId: eletrica.idPoder},
   {serNome:freya.nome, poderId: tecido.idPoder},
   {serNome:freya.nome, poderId: longe.idPoder},
   {serNome:freya.nome, poderId: cura.idPoder},
   {serNome:freya.nome, poderId: allspeak.idPoder},
   {serNome:loki.nome, poderId: tecido.idPoder},
   {serNome:loki.nome, poderId: longe.idPoder},
   {serNome:loki.nome, poderId: cura.idPoder},
   {serNome:loki.nome, poderId: disfarce.idPoder}]})
 const mjolnir = await prisma.artefato.create({data:
   {nome: 'mjolnir', objeto: 'martelo', material:'uru', destruido: true, nomeSer: thor.nome}})
 const rompe = await prisma.artefato.create({data:
   {nome: 'Rompe-Tormentas', objeto: 'martelo', material:'uru', destruido: false, nomeSer: bill.nome}})
 const espada = await prisma.artefato.create({data:
   {nome: 'Necroespada', objeto: 'espada', material:'simbiose All-Black', destruido: false, nomeSer: gorr.nome}})
 const poderArte = await prisma.artefatoPoder.createMany({data: [
   {artefatoNome:mjolnir.nome, poderId: eletrica.idPoder},
   {artefatoNome:mjolnir.nome, poderId: invoca.idPoder},
   {artefatoNome:mjolnir.nome, poderId: voo.idPoder},
   {artefatoNome:rompe.nome, poderId: eletrica.idPoder},
   {artefatoNome:rompe.nome, poderId: invoca.idPoder},
   {artefatoNome:rompe.nome, poderId: bifrost.idPoder},
   {artefatoNome:espada.nome, poderId: tecido.idPoder},
   {artefatoNome:espada.nome, poderId: longe.idPoder},
   {artefatoNome:espada.nome, poderId: cura.idPoder},
   {artefatoNome:espada.nome, poderId: escuridao.idPoder}]})        
}
main()
.catch((e) => {
  console.error('Erro no seed:', e)
   process.exit(1)
})
.finally(() => {
  prisma.$disconnect();
  console.log('Seed concluído!');
});
