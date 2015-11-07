/// <reference path="../../typings/tsd" />
/// <reference path="../../app/js/main" />

"use strict";

describe("<%= ts.namespace %>Min Math Service", () => {

    let ms: MathService;

    beforeEach(() => {
        ms = new MathService();
    });

    it("should compute meaning of life", () => {
        expect(ms.add(20, 22)).toBe(42);
    });
});

describe("<%= ts.namespace %>Min Math Service", () => {
    it("Should add asynchronously", (done) => {
        new MathService().doAdd(6, 7).then((sum) => {
            expect(sum).toEqual(13);
            done();
        });
    });
});
