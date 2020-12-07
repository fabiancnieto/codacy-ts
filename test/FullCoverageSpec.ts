import {suite, test} from "@testdeck/mocha";
import {IDependencyOne, IDependencyTwo, ICoverage} from "../index";
import {stubInterface} from "ts-sinon";
import * as assert from "assert";
import {FullCoverage} from "../src/FullCoverage";

@suite
class FullCoverageSpec {

    private dependencyOne = stubInterface<IDependencyOne>();
    private dependencyTwo = stubInterface<IDependencyTwo>();
    private fullCoverage: ICoverage;

    before() {
        this.dependencyOne.methodOne.returns("Hi");
        this.dependencyTwo.methodTwo.returns(10);
        this.fullCoverage = new FullCoverage(
            this.dependencyOne,
            this.dependencyTwo
        );
    }

    @test "mainMethod, should return string if no parameter was specified"() {
        const result = this.fullCoverage.mainMethod();
        assert.equal(result, "Hi");
    }

    @test "mainMethod, should return string if a parameter was specified"() {
        const result = this.fullCoverage.mainMethod("myself");
        assert.equal(result, "Hi");
    }

    @test "auxMethod, should return string if no parameter was specified"() {
        const result = this.fullCoverage.auxMethod();
        assert.equal(result, 10);
    }

    @test "auxMethod, should return string if a parameter was specified"() {
        const result = this.fullCoverage.auxMethod(10);
        assert.equal(result, 10);
    }
}
