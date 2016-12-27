
var expect = require("chai").expect;
var deepMerge = require("../src/deepmerge.js").deepMerge;

describe("Deep Merge", function() {
    it("merges shallow maps", function() {
        var left = {a: 1};
        var right = {b: 2};

        expect(deepMerge(left, right)).to.eql({a: 1, b: 2});
    });

    it("merges one level deep", function() {
        var left = {a: {b: 2}};
        var right = {a: {c: 3}};

        expect(deepMerge(left, right)).to.eql({a: {b: 2, c: 3}});
    });

    it("merges empty maps", function() {
        var left = {a: 4};
        var right = {};

        expect(deepMerge(left, right)).to.eql({a: 4});
    });

    it("merges very deeply", function() {
        var left = {
            a: {
                b: {
                    c: {
                        d: {
                            e: [1], f: [3], g: {h: 1}
                        }
                    }
                }
            }
        };

        var right = {
            a: {
                b: {
                    c: {
                        d: {
                            e: 4, g: {r: 2}
                        }
                    },
                    other: {}
                }
            }
        };

        var expected = {
            a: {
                b: {
                    c: {
                        d: {
                            e: 4, f: [3], g: {r: 2, h: 1}
                        }
                    },
                    other: {}
                }
            }
        };

        expect(deepMerge(left, right)).to.eql(expected);
    });
});
