import { Generator } from "../src/components/personas/Generator";

describe("Generator:", () => {

    it("should get a random object from an array", () => {
        const list = [1, 2, 3] as number[];
        const results = [] as number[];
        for (let x = 0; x < 15; x++) {
            results.push(Generator.getRandomObjectFromList(list));
        }

        for (let x: number = 1; x < 4; x++) {
            expect(results.includes(x)).toBe(true);
        }
    });

    it("should get a list of random distinct numbers", () => {
        const results = Generator.getRandomListOfDistinctInts(4, 0, 5) as number[];

        for (let x: number = 1; x < 4; x++) {
            expect(results.includes(x)).toBe(true);
        }

    });
});
