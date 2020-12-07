import {ICoverage, IDependencyOne, IDependencyTwo} from "../index";

export class PartialCoverage implements ICoverage {
    constructor(
        private readonly dependencyOne: IDependencyOne,
        private readonly dependencyTwo: IDependencyTwo,
    ) {}

    mainMethod(value?: string): string {
        if (value) {
            return this.dependencyOne.methodOne(value);
        }
        return this.dependencyOne.methodOne("No value");
    }

    mainMethod2(value?: string): string {
        if (value) {
            return this.dependencyTwo.methodOne(value);
        }
        return this.dependencyTwo.methodOne("No value");
    }

    auxMethod(value?: number): number {
        if (value) {
            return this.dependencyTwo.methodTwo(value);
        }
        return this.dependencyTwo.methodTwo(1);
    }

    auxMethod2(value?: number): number {
        if (value) {
            return this.dependencyOne.methodTwo(value);
        }
        return this.dependencyOne.methodTwo(1);
    }
}
