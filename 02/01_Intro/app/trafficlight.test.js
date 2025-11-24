//import module traffic light
const app = require("./trafficlight");

//test suite
describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red"))
            .toBe("DON'T WALK!");
    });
    it(`case orange light`, () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });
    it(`case green light`, () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });
});



