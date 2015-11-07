/// <reference path="../../typings/tsd" />
/// <reference path="../../app/js/main" />
"use strict";
describe("<%= ts.namespace %>Min Math Service", function () {
    var ms;
    beforeEach(function () {
        ms = new MathService();
    });
    it("should compute meaning of life", function () {
        expect(ms.add(20, 22)).toBe(42);
    });
});
describe("<%= ts.namespace %>Min Math Service", function () {
    it("Should add asynchronously", function (done) {
        new MathService().doAdd(6, 7).then(function (sum) {
            expect(sum).toEqual(13);
            done();
        });
    });
});
//# sourceMappingURL=specs.js.map