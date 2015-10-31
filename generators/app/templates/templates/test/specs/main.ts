/// <reference path="../../typings/tsd" />
/// <reference path="../../app/js/main" />

'use strict';

describe('Fun <% appName.capital %> Filter', function() {
    let $filter: any, df: any;

    beforeEach(function() {
        module('app');

        inject(function(_$filter_: any) {
            $filter = _$filter_;
            df = $filter('funFilter');
        });
    });

    it('exists', function() {
        expect(df).not.toBeNull();
    });

    it('is total fun', function() {
        expect(df(4)).toEqual(20);
    });
});
