import { Persona } from "../src/components/personas/Persona.class";

describe("Persona Class", () => {

    it("should get a random object from an array", () => {
        const list = [1, 2, 3] as number[];
        const results = [] as number[];
        for (let x = 0; x < 15; x++) {
            results.push(Persona.getRandomObjectFromList(list));
        }

        expect(list.some( v => results.includes(v)).toBe(true);
        
    });

    it("should get a list of random distinct numbers", () => {
        const results = Persona.getRandomListOfDistinctInts(4, 0, 5) as number[];

        for (let x: number = 1; x < 4; x++) {
            expect(results.includes(x)).toBe(true);
        }

    });
});
