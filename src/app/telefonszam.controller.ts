import { TelefonszamModel } from "./telefonszam.model";

export class TelefonszamController {
    private model: TelefonszamModel;

    constructor(model: TelefonszamModel) {
        this.model = model;
    }

    setTelefonszam(telefonszam: string): void {
        this.model.setTelefonszam(telefonszam);
    }

    getTelefonszam(): string {
        return this.model.getTelefonszam();
    }

    ellenorizFormatum(): boolean {
        return this.model.isErvenyesFormatum();
    }
}