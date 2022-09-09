export class Gebruiker {

    constructor(private voornaam: string, private naam: string, private emailadres: string, private wachtwoord: string) {}

    getVoornaam(): string {
        return this.voornaam
    }

    getNaam(): string {
        return this.naam
    }
    
    getEmailadres(): string {
        return this.emailadres
    }
    
    getWachtwoord(): string {
        return this.wachtwoord
    }
}