import { expect } from "chai";
import axios from "axios";

const apiEndpoint =
	"https://bfhldevapigw.healthrx.co.in/automation-campus/create/user";
const headers = {
	"Content-Type": "application/json",
	"roll-number": "2213648",
};

describe("API User Creation Tests", () => {
	it("should successfully create a user with valid details", async () => {
		const data = {
			firstName: "Test",
			lastName: "Test",
			phoneNumber: 9999999999,
			emailId: "test.test@test.com",
		};

		const response = await axios.post(apiEndpoint, data, { headers });
		expect(response.status).to.equal(200);
		expect(response.data).to.have.property("success", true);
	});

	it("should return 400 when using duplicate phone number", async () => {
		const data = {
			firstName: "Test2",
			lastName: "User2",
			phoneNumber: 1234567890,
			emailId: "test2.user2@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 401 when roll-number header is missing", async () => {
		const data = {
			firstName: "Test3",
			lastName: "User3",
			phoneNumber: 1234567891,
			emailId: "test3.user3@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, {
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			expect(error.response.status).to.equal(401);
		}
	});

	it("should return 400 when firstName is missing", async () => {
		const data = {
			lastName: "User4",
			phoneNumber: 1234567892,
			emailId: "test4.user4@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 400 when lastName is missing", async () => {
		const data = {
			firstName: "Test10",
			phoneNumber: 1234567897,
			emailId: "test10.user10@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 400 when lastName is an empty string", async () => {
		const data = {
			firstName: "Test11",
			lastName: "",
			phoneNumber: 1234567898,
			emailId: "test11.user11@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 400 when using duplicate email ID", async () => {
		const data = {
			firstName: "Test5",
			lastName: "User5",
			phoneNumber: 1234567893,
			emailId: "test1.user1@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 400 for invalid phone number format", async () => {
		const data = {
			firstName: "Test6",
			lastName: "User6",
			phoneNumber: "invalid-phone",
			emailId: "test6.user6@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 400 for invalid email format", async () => {
		const data = {
			firstName: "Test7",
			lastName: "User7",
			phoneNumber: 1234567894,
			emailId: "invalid-email.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(500);
		}
	});

	it("should return 400 when firstName exceeds the character limit", async () => {
		const data = {
			firstName: "a".repeat(101),
			lastName: "User8",
			phoneNumber: 1234567895,
			emailId: "test8.user8@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});

	it("should return 400 when firstName is an empty string", async () => {
		const data = {
			firstName: "",
			lastName: "User9",
			phoneNumber: 1234567896,
			emailId: "test9.user9@test.com",
		};

		try {
			await axios.post(apiEndpoint, data, { headers });
		} catch (error) {
			expect(error.response.status).to.equal(400);
		}
	});
});
