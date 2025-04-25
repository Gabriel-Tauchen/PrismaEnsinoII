-- CreateEnum
CREATE TYPE "TipoSer" AS ENUM ('SER', 'MORTAL', 'DIVINDADE');

-- CreateTable
CREATE TABLE "Poder" (
    "idPoder" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Poder_pkey" PRIMARY KEY ("idPoder")
);

-- CreateTable
CREATE TABLE "PoderDivindade" (
    "serNome" TEXT NOT NULL,
    "poderId" INTEGER NOT NULL,

    CONSTRAINT "PoderDivindade_pkey" PRIMARY KEY ("serNome","poderId")
);

-- CreateTable
CREATE TABLE "ArtefatoPoder" (
    "artefatoNome" TEXT NOT NULL,
    "poderId" INTEGER NOT NULL,

    CONSTRAINT "ArtefatoPoder_pkey" PRIMARY KEY ("artefatoNome","poderId")
);

-- CreateTable
CREATE TABLE "Artefato" (
    "nome" TEXT NOT NULL,
    "objeto" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "destruido" BOOLEAN NOT NULL,
    "nomeSer" TEXT NOT NULL,

    CONSTRAINT "Artefato_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "SerSer" (
    "nomeResponsavel" TEXT NOT NULL,
    "nomeFilho" TEXT NOT NULL,

    CONSTRAINT "SerSer_pkey" PRIMARY KEY ("nomeResponsavel","nomeFilho")
);

-- CreateTable
CREATE TABLE "Ser" (
    "nome" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "morto" BOOLEAN NOT NULL,
    "tipo" "TipoSer" NOT NULL,
    "fraqueza" TEXT,
    "designacao" TEXT,
    "restituirVita" BOOLEAN,
    "nascimento" TIMESTAMP(3),
    "raca" TEXT,
    "profissao" TEXT,
    "nomeMortal" TEXT,

    CONSTRAINT "Ser_pkey" PRIMARY KEY ("nome")
);

-- CreateIndex
CREATE UNIQUE INDEX "Poder_nome_key" ON "Poder"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Ser_nomeMortal_key" ON "Ser"("nomeMortal");

-- AddForeignKey
ALTER TABLE "PoderDivindade" ADD CONSTRAINT "PoderDivindade_serNome_fkey" FOREIGN KEY ("serNome") REFERENCES "Ser"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoderDivindade" ADD CONSTRAINT "PoderDivindade_poderId_fkey" FOREIGN KEY ("poderId") REFERENCES "Poder"("idPoder") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtefatoPoder" ADD CONSTRAINT "ArtefatoPoder_artefatoNome_fkey" FOREIGN KEY ("artefatoNome") REFERENCES "Artefato"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtefatoPoder" ADD CONSTRAINT "ArtefatoPoder_poderId_fkey" FOREIGN KEY ("poderId") REFERENCES "Poder"("idPoder") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artefato" ADD CONSTRAINT "Artefato_nomeSer_fkey" FOREIGN KEY ("nomeSer") REFERENCES "Ser"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SerSer" ADD CONSTRAINT "SerSer_nomeResponsavel_fkey" FOREIGN KEY ("nomeResponsavel") REFERENCES "Ser"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SerSer" ADD CONSTRAINT "SerSer_nomeFilho_fkey" FOREIGN KEY ("nomeFilho") REFERENCES "Ser"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ser" ADD CONSTRAINT "Ser_nomeMortal_fkey" FOREIGN KEY ("nomeMortal") REFERENCES "Ser"("nome") ON DELETE SET NULL ON UPDATE CASCADE;
