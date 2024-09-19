# API User Creation Test Suite

This project is the task for Bajaj Hiring Challenge. It contains a test suite for validating an API that creates a new user. The tests are written using **Mocha** and **Chai** in a Node.js environment. The purpose is to ensure the API behaves correctly in different scenarios, including success cases, validation failures, and error handling.

## Project Structure

- `apiTests.js`: Contains all the test cases for the user creation API.
- `index.js`: Runs the tests using the `exec` function to automate the execution of the test suite.
- `package.json`: Defines the test script for running the tests using `Mocha`.

## Prerequisites

To run this project, ensure you have the following installed:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/api-user-creation-tests.git
   ```

2. Navigate to the project directory:

   ```bash
   cd api-user-creation-tests
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Running the Tests

You can run the tests using the `npm test` command, which is defined in the `package.json` file:

```bash
npm test
```

This will directly run the `Mocha` test cases from `apiTests.js`.

## Test Cases

The test suite includes validation for various edge cases, such as:

1. **Successful User Creation**: Tests if a valid user is successfully created.
2. **Duplicate Phone Number**: Tests if the API returns a 400 error when trying to create a user with an already existing phone number.
3. **Duplicate Email ID**: Tests if the API returns a 400 error for duplicate email IDs.
4. **Missing Fields**: Checks if the API correctly handles missing required fields like `firstName` and `lastName`.
5. **Invalid Field Formats**: Includes test cases for invalid phone number and email formats.
6. **Exceeding Field Length**: Tests for exceeding character limits on fields such as `firstName`.
7. **Unauthorized Request**: Verifies that a missing `roll-number` header results in a 401 error.
8. **Empty Fields**: Tests if empty strings in required fields return a 400 error.

## Example of a Test Case

Here’s an example of one of the test cases that checks for a duplicate phone number:

```javascript
it("should return 400 when using duplicate phone number", async () => {
	const data = {
		firstName: "Test2",
		lastName: "User2",
		phoneNumber: 1234567890, // Duplicate phone number
		emailId: "test2.user2@test.com",
	};

	try {
		await axios.post(apiEndpoint, data, { headers });
	} catch (error) {
		expect(error.response.status).to.equal(400);
	}
});
```

## Dependencies

The project uses the following Node.js libraries:

- `axios`: For making HTTP requests to the API.
- `chai`: For writing assertions in the test cases.
- `mocha`: For running the test suite.
