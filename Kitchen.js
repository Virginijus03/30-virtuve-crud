class Kitchen {
    constructor(whoCook) {
        this.whoCook = whoCook;
        this.ingridientaiList = [];

    }
    intro() {
        console.log(`Sveiki atvyke i ${this.whoCook} virtuve!`);
    }
    nupirkta(pavadinimas, kiekis) {
        this.ingridientaiList.push({ pavadinimas, kiekis })
        console.log(this.ingridientaiList);
    }
    turimiProduktai() {
        let count = 0;

        for (let i = 0; i < this.ingridientaiList.length; i++) {
            const produktas = this.ingridientaiList[i];
            const naujasUzvadinimas = this.isDidziosiosRaides(produktas.pavadinimas);
            ++count
            console.log(`${count}) ${naujasUzvadinimas}: ${produktas.kiekis}`);
            //console.log(`${count}) ${produktas.pavadinimas[0].toUpperCase() + produktas.pavadinimas.slice(1)}: ${produktas.kiekis}`);
        }
    }
    isDidziosiosRaides(tekstas) {
        const raide = tekstas[0].toUpperCase() + tekstas.slice(1);
        return raide;
        //console.log(raide);
    }
    perekuras() {
        console.log(`
        Padaryk Donatai breika!
        `);
    }
    sunaudota(naudojamasNeimas, naudojamasKiekis) {
        for (let i = 0; i < this.ingridientaiList.length; i++) {
            const valgis = this.ingridientaiList[i];

            if (naudojamasNeimas === valgis.pavadinimas) {

                valgis.kiekis -= naudojamasKiekis;
                break;
            }
        }
    }
    perekuras() {
        console.log(`
        Padaryk Donatai breika!
        `);
    }
    sugedesProduktas(pairo) {
        const updatedList = [];
        for (let i = 0; i < this.ingridientaiList.length; i++) {
            const valgis = this.ingridientaiList[i];

            if (pairo !== valgis.pavadinimas) {
                updatedList.push(this.ingridientaiList[i]);
            }
        }
        this.ingridientaiList = updatedList;
    }
}
module.exports = Kitchen;