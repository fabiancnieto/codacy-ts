import {ICoverage, IDependencyOne, IDependencyTwo} from "../index";

export class FullCoverage implements ICoverage {
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

    auxMethod(value?: number): number {
        if (value) {
            return this.dependencyTwo.methodTwo(value);
        }
        return this.dependencyTwo.methodTwo(1);
    }
}
