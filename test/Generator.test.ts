import { mount } from "@vue/test-utils";
import { Generator } from "../src/components/personas/Generator";

describe("Generator", () => {

    it("get random object from array", () => {
        const list = [1, 2, 3] as number[];
        const results = [] as number[];
        for (let x = 0; x < 15; x++) {
            results.push(Generator.getRandomObjectFromList(list));
        }

        expect(results.includes(1)).toBe(true);
        expect(results.includes(2)).toBe(true);
        expect(results.includes(3)).toBe(true);
    });

    it("get random list of distinct numbers", () => {
        for (let x = 0; x < 3; x++) {
            const results = Generator.getRandomListOfDistinctInts(4, 0, 5) as number[];

            expect(results.includes(1)).toBe(true);
            expect(results.includes(2)).toBe(true);
            expect(results.includes(3)).toBe(true);
            expect(results.includes(4)).toBe(true);
        }
    });
});
