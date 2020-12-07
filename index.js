"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyTwo = exports.DependencyOne = void 0;
const FullCoverage_1 = require("./src/FullCoverage");
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
const diOne = new DependencyOne();
const diTwo = new DependencyTwo();
const main = new FullCoverage_1.FullCoverage(diOne, diTwo);
console.log(main.mainMethod("Fabian"));
console.log(main.mainMethod());
console.log(main.auxMethod(5));
console.log(main.auxMethod());
//# sourceMappingURL=index.js.map