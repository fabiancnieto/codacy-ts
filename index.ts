export interface IDependencyOne {
    methodOne(id: string): string;
    methodTwo(id: number): number;
}

export interface IDependencyTwo {
    methodOne(id: string): string;
    methodTwo(id: number): number;
}

export interface ICoverage {
    mainMethod(value?: string): string;
    auxMethod(value?: number): number;
}

export class DependencyOne implements IDependencyOne {
    methodOne(id: string): string {
        return `Hello from One ${id}`;
    }

    methodTwo(id: number): number {
        return 10 + id;
    }
}

export class DependencyTwo implements IDependencyOne {
    methodOne(id: string): string {
        return `Hello from One ${id}`;
    }

    methodTwo(id: number): number {
        return 10 + id;
    }
}

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
