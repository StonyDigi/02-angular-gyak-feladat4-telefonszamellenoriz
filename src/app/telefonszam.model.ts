export class TelefonszamModel {
    private telefonszam: string = '';

    setTelefonszam(telefonszam: string): void {
        this.telefonszam = telefonszam;
    }

    getTelefonszam(): string {
        return this.telefonszam;
    }

    isErvenyesFormatum(): boolean {
        const regex = /^[0-9]{2}-[0-9]{2,3}-[0-9]{6,7}$/;
        return regex.test(this.telefonszam);
    }
}