const { trafficLight } = require('./trafficlight');

test("returns WALK! for green", () => {
    expect(trafficLight('green')).toBe('WALK!');
});

test("returns DON'T WALK! for red", () => {
    expect(trafficLight('red')).toBe("DON'T WALK!");
});

test("returns ATTENTION! for orange", () => {
    expect(trafficLight('orange')).toBe('ATTENTION!');
});

test("returns OUT OF ORDER for undefined", () => {
    expect(trafficLight()).toBe('OUT OF ORDER');
});
