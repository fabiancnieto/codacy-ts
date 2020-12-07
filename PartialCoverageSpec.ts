import {suite, test} from "@testdeck/mocha";
import {IDependencyOne, IDependencyTwo, ICoverage, PartialCoverage} from "./index";
import {stubInterface} from "ts-sinon";
import * as assert from "assert";

@suite
class PartialCoverageSpec {

    private dependencyOne = stubInterface<IDependencyOne>();
    private dependencyTwo = stubInterface<IDependencyTwo>();
    private partialCoverage: ICoverage;

    before() {
        this.dependencyOne.methodOne.returns("Hi");
        this.dependencyTwo.methodTwo.returns(10);
        this.partialCoverage = new PartialCoverage(
            this.dependencyOne,
            this.dependencyTwo
        );
    }

    @test "mainMethod, should return string if no parameter was specified"() {
        const result = this.partialCoverage.mainMethod();
        assert.equal(result, "Hi");
    }

    @test "mainMethod, should return string if a parameter was specified"() {
        const result = this.partialCoverage.mainMethod("myself");
        assert.equal(result, "Hi");
    }
}
