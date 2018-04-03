import { Persona } from "./Persona.interface";

export class Generator {

    public static generate(numberOfPersonas: number): Persona[] {

        return [{
            prename: "Otto",
            name: "Mustermann",
            country: "Germany",
            age: 35,
            gender: "male"
        }];
    }

}
