
class Kedvencek {
    constructor(mintaszoveg, betumeret, szovegszin, hatterszin) {
        this.mintaszoveg = mintaszoveg;
        this.betumeret = betumeret;
        this.szovegszin = szovegszin;
        this.hatterszin = hatterszin;
    }

    get getMintaszoveg() {
        return this.mintaszoveg;
    }

    get getBetumeret() {
        return this.betumeret;
    }

    get getSzovegszin() {
        return this.szovegszin;
    }

    get getHatterszin() {
        return this.hatterszin;
    }
}
