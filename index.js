"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialCoverage = exports.FullCoverage = exports.DependencyTwo = exports.DependencyOne = void 0;
class DependencyOne {
    methodOne(id) {
        return `Hello from One ${id}`;
    }
    methodTwo(id) {
        return 10 + id;
    }
}
exports.DependencyOne = DependencyOne;
class DependencyTwo {
    methodOne(id) {
        return `Hello from One ${id}`;
    }
    methodTwo(id) {
        return 10 + id;
    }
}
exports.DependencyTwo = DependencyTwo;
class FullCoverage {
    constructor(dependencyOne, dependencyTwo) {
        this.dependencyOne = dependencyOne;
        this.dependencyTwo = dependencyTwo;
    }
    mainMethod(value) {
        if (value) {
            return this.dependencyOne.methodOne(value);
        }
        return this.dependencyOne.methodOne("No value");
    }
    auxMethod(value) {
        if (value) {
            return this.dependencyTwo.methodTwo(value);
        }
        return this.dependencyTwo.methodTwo(1);
    }
}
exports.FullCoverage = FullCoverage;
class PartialCoverage {
    constructor(dependencyOne, dependencyTwo) {
        this.dependencyOne = dependencyOne;
        this.dependencyTwo = dependencyTwo;
    }
    mainMethod(value) {
        if (value) {
            return this.dependencyOne.methodOne(value);
        }
        return this.dependencyOne.methodOne("No value");
    }
    mainMethod2(value) {
        if (value) {
            return this.dependencyTwo.methodOne(value);
        }
        return this.dependencyTwo.methodOne("No value");
    }
    auxMethod(value) {
        if (value) {
            return this.dependencyTwo.methodTwo(value);
        }
        return this.dependencyTwo.methodTwo(1);
    }
    auxMethod2(value) {
        if (value) {
            return this.dependencyOne.methodTwo(value);
        }
        return this.dependencyOne.methodTwo(1);
    }
}
exports.PartialCoverage = PartialCoverage;
// const diOne = new DependencyOne();
// const diTwo = new DependencyTwo();
// const main = new FullCoverage(
//     diOne,
//     diTwo
// );
//
// console.log(main.mainMethod("Fabian"));
// console.log(main.mainMethod());
// console.log(main.auxMethod(5));
// console.log(main.auxMethod());
//# sourceMappingURL=index.js.map