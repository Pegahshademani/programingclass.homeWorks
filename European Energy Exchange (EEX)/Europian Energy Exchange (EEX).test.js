import {compareCost} from "./European Energy Exchange (EEX).js";


test('best time for this amount of hours is..', () => {
    expect(compareCost(1)).toBe(23);
});
test('best time for this amount of hours is..', () => {
    expect(compareCost(2)).toBe(22);
});
test('best time for this amount of hours is..', () => {
    expect(compareCost(3)).toBe(0);
});

test('best time for this amount of hours is..', () => {
    expect(compareCost(25)).toBe(false);
});
