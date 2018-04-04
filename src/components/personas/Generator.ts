import { IPersona } from "./Persona.interface";

export class Generator {

    public static generate(numberOfPersonas: number = 1): IPersona[] {

        return [
            {
                prename: "Otto",
                name: "Mustermann",
                country: "Germany",
                age: 35,
                gender: "male"
            },
            {
                prename: "Erika",
                name: "Mustermann",
                country: "Germany",
                age: 35,
                gender: "female"
            }
        ];
    }

}
