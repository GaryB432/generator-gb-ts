/// <reference path="../../typings/tsd" />
/// <reference path="../../app/js/main" />
'use strict';
describe('Fun <%= ts.namespace %> Filter', function () {
    var $filter, df;
    beforeEach(function () {
        module('app');
        inject(function (_$filter_) {
            $filter = _$filter_;
            df = $filter('funFilter');
        });
    });
    it('exists', function () {
        expect(df).not.toBeNull();
    });
    it('is total fun', function () {
        expect(df(4)).toEqual(20);
    });
});
//# sourceMappingURL=specs.js.map