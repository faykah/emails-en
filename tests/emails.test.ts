import { expect } from "chai";
import { it, describe } from "mocha";
import { emails } from "../src/index";

describe("emails", () => {
	it("should return an array of strings", () => {
		const types = [...new Set(emails.map(email => typeof email))];

		expect(types).to.be.deep.equal(["string"]);
	});

	it("should not contains duplicates", () => {
		expect([...new Set(emails)]).to.be.deep.equal(emails);
	});
});
