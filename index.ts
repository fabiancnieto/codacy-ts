import {FullCoverage} from "./src/FullCoverage";

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

const diOne = new DependencyOne();
const diTwo = new DependencyTwo();
const main = new FullCoverage(
    diOne,
    diTwo
);

console.log(main.mainMethod("Fabian"));
console.log(main.mainMethod());
console.log(main.auxMethod(5));
console.log(main.auxMethod());
