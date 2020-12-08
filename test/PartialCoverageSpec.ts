import {suite, test} from "@testdeck/mocha";
import {IDependencyOne, IDependencyTwo, ICoverage} from "../index";
import {stubInterface} from "ts-sinon";
import * as assert from "assert";
import {PartialCoverage} from "../src/PartialCoverage";

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

    @test "auxMethod, should return string if no parameter was specified"() {
        const result = this.partialCoverage.auxMethod();
        assert.equal(result, 10);
    }
}
