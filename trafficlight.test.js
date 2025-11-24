const traffic = require('./trafficlight');

test("trafficlight returns green", () => {
    expect(traffic('green')).toBe('Go');
})