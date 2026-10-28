// What is software testing?
// Why is testing important?
// What is unit testing?
// What is integration testing?
// What is end-to-end testing?
// What is the difference between unit, integration and E2E testing?
// When would you use unit tests?
// When would you use integration tests?
// When would you use E2E tests?
// What is functional testing?
// What is non-functional testing?
// What is regression testing?
// What is smoke testing?
// What is sanity testing?
// What is acceptance testing?
// What is black-box testing?
// What is white-box testing?
// What is a test case?
// What is a test suite?
// What is a test scenario?
// What makes a good test?
// What is the testing pyramid?
// Is the testing pyramid still relevant?
// What is Arrange, Act, Assert?
// Why is AAA useful?
// What does test isolation mean?
// Why should tests be independent?
// What is a deterministic test?
// What is a flaky test?
// Why do tests become flaky?
// How do you prevent flaky tests?
// What are implementation details?
// What does "test behavior, not implementation" mean?
// Why should implementation details not be tested?
// Mocking
// What is mocking?
// What is a mock?
// What is a stub?
// What is a spy?
// What is a fake?
// What is a dummy?
// What are test doubles?
// Mock vs stub vs spy?
// When should you mock a dependency?
// When should you avoid mocking?
// What are the disadvantages of excessive mocking?
// What does it mean to mock an external API?
// Why would you mock a database?
// When would you use a real database instead?
// Should you mock everything in a unit test?
// What is over-mocking?
// Coverage
// What is code coverage?
// What is line coverage?
// What is branch coverage?
// What is function coverage?
// What is statement coverage?
// Does 100% code coverage mean the application is fully tested?
// Does 100% coverage mean you have good tests?
// Test data / cleanup
// What is a test fixture?
// What is test data?
// Fixture vs factory?
// What is a test data factory?
// Why use test data factories?
// Why is cleanup important?
// How do you prevent tests from sharing state?
// What is React Testing Library?
// Why use React Testing Library?
// What should you test with React Testing Library?
// What should you not test with React Testing Library?
// What does render() do?
// What is screen?
// What are Testing Library queries?
// What is getByRole?
// What is getByLabelText?
// What is getByText?
// What is getByTestId?
// Why should you avoid relying heavily on data-testid?
// What is the difference between getBy, queryBy and findBy?
// When should you use getBy?
// When should you use queryBy?
// When should you use findBy?
// Which query should you prefer?
// Why is getByRole recommended?
// What is accessible name?
// Why are accessibility-focused queries preferred?
// User interactions
// What is userEvent?
// What is fireEvent?
// What is the difference between userEvent and fireEvent?
// Why is userEvent preferred for user interactions?
// How do you test a button click?
// How do you test an input change?
// How do you test form submission?
// How do you test keyboard interaction?
// How do you test a modal?
// How do you test dropdowns?
// Component testing
// How do you test a React component?
// What should you test in a React component?
// Should you test internal state?
// Should you test implementation details?
// How do you test props?
// How do you test different prop combinations?
// How do you test conditional rendering?
// How do you test forms?
// How do you test validation?
// How do you test loading states?
// How do you test error states?
// How do you test empty states?
// Async UI
// How do you test asynchronous UI updates?
// How do you use findBy?
// What is waitFor?
// When would you use waitFor?
// How do you test loading?
// How do you test the error state after a failed request?
// How do you handle async components in tests?
// API mocking
// How do you test a React component that calls an API?
// Would you call the real API in a unit test?
// How would you mock the API?
// How do you test successful API responses?
// How do you test API errors?
// How do you test loading?
// What happens if the API is slow?
// How do you simulate API latency?
// How do you simulate malformed API data?
// React Router / Redux / hooks
// How do you test routing?
// How do you test a protected route?
// How do you test navigation?
// How do you test route parameters?
// How do you test a redirect after login?
// How do you test Redux logic?
// How do you test a Redux slice?
// How do you test async thunks?
// How do you test a component connected to Redux?
// Should you test Redux implementation details?
// How do you provide the Redux store to a component during tests?
// How do you test a custom Hook?
// What is renderHook?
// How do you test a Hook with asynchronous behavior?
// How do you test a Hook that depends on context?
// Accessibility testing
// How do you test accessibility?
// What is automated accessibility testing?
// What is axe?
// What should still be tested manually?
// How do you test keyboard navigation?
// How do you test labels and accessible names?
// How do you verify that a button is accessible?
// 11. Jest / Vitest
// Fundamentals
// What is Jest?
// What is Vitest?
// Why use a test runner?
// Jest vs Vitest?
// What is describe()?
// What is test()?
// What is it()?
// What is expect()?
// What are matchers?
// What is beforeEach()?
// What is afterEach()?
// What is beforeAll()?
// What is afterAll()?
// What is setup and teardown?
// Mocks / spies
// What is jest.fn()?
// What is vi.fn()?
// What is spyOn?
// What is mockImplementation?
// What is mockReturnValue?
// What is mockResolvedValue?
// What is mockRejectedValue?
// What is the difference between mockClear, mockReset and mockRestore?
// What does jest.mock() do?
// What does vi.mock() do?
// What is a mock function?
// What is a spy?
// Fake timers
// What are fake timers?
// Why would you use fake timers?
// How do you test setTimeout()?
// How do you test setInterval()?
// How do you advance timers?
// Why would you not want a test to actually wait two minutes?
// Async testing
// How do you test asynchronous functions?
// How do you test rejected Promises?
// What happens if you forget to await a test?
// How do you test timeouts?
// How do you test retries?
// How do you test race conditions?
// 12. Backend testing
// API
// What is API testing?
// How do you test a REST API?
// What should you test in an API endpoint?
// How do you test GET?
// How do you test POST?
// How do you test PUT/PATCH?
// How do you test DELETE?
// How do you test HTTP status codes?
// How do you test response bodies?
// How do you test headers?
// How do you test authentication?
// How do you test authorization?
// How do you test validation errors?
// How do you test malformed requests?
// How do you test rate limiting?
// How do you test CORS?
// How do you test pagination?
// How do you test sorting and filtering?
// Express
// How do you test an Express API?
// What is Supertest?
// Why use Supertest?
// Supertest vs Postman?
// Supertest vs Playwright?
// How do you test an Express route with Supertest?
// Can Supertest test middleware?
// Can Supertest test authentication?
// How do you test middleware?
// How do you test authentication middleware?
// How do you test authorization middleware?
// How do you test controllers?
// How do you test services?
// How do you test repositories?
// Database testing
// How do you test database interactions?
// Would you mock the database in unit tests?
// Why mock a database in unit tests?
// Why use a real database in integration tests?
// What is an in-memory database?
// What are the trade-offs between a real database and a mock?
// How do you test SQL queries?
// How do you test MongoDB queries?
// How do you test transactions?
// How do you reset database state?
// How do you seed test data?
// What is a test database?
// Why use a separate test database?
// How do you prevent tests from interfering with each other?
// Authentication / security testing
// How do you test login?
// How do you test invalid credentials?
// How do you test JWT authentication?
// How do you test expired tokens?
// How do you test missing tokens?
// How do you test refresh tokens?
// How do you test logout?
// How do you test protected routes?
// How do you test role-based authorization?
// How do you test access denied responses?
// How do you test SQL injection protection?
// How do you test NoSQL injection protection?
// How do you test XSS protection?
// How do you test CSRF protection?
// How do you test input validation?
// How do you test rate limiting?
// How do you test authentication bypass attempts?
// How do you test unauthorized access?
// Error testing
// How do you test error handling?
// How do you test a 400 response?
// How do you test a 401 response?
// How do you test a 403 response?
// How do you test a 404 response?
// How do you test a 409 response?
// How do you test a 422 response?
// How do you test a 500 response?
// How do you test database failures?
// How do you test external API failures?
// How do you test timeout scenarios?
// How do you test unexpected exceptions?
// External services
// How do you test a service that calls an external API?
// Should you call the real API?
// When would you mock the external API?
// How do you simulate a 500 response?
// How do you simulate a timeout?
// How do you simulate malformed data?
// What is contract testing?
// What is consumer-driven contract testing?
// Contract testing vs integration testing?
// 13. E2E / Playwright / Cypress
// E2E fundamentals
// What is E2E testing?
// What should be tested with E2E?
// What should not be tested with E2E?
// Why are E2E tests slower?
// Why are E2E tests more fragile?
// How do you reduce E2E flakiness?
// How do you test login E2E?
// How do you test checkout E2E?
// How do you test protected routes?
// How do you test a complete API + frontend flow?
// Playwright
// What is Playwright?
// Why use Playwright?
// Playwright vs Cypress?
// What is a locator?
// What is getByRole()?
// What is getByLabel()?
// How does Playwright auto-wait?
// What are Playwright fixtures?
// What is a browser context?
// How do you intercept network requests?
// How do you take screenshots?
// How do you run tests in multiple browsers?
// How do you run tests in parallel?
// How do you test a form with Playwright?
// How do assertions work in Playwright?
// What is auto-retry?
// Why is await expect(...) important?
// Why use locators instead of arbitrary selectors?
// Why is getByRole useful in Playwright?
// What is a Playwright fixture?
// How do fixtures provide isolation?
// Cypress
// What is Cypress?
// Cypress vs Playwright?
// When would you choose Cypress?
// What are Cypress fixtures?
// How do you intercept network calls in Cypress?
// How do you test a form with Cypress?
// Visual testing
// What is visual regression testing?
// Why use screenshots in tests?
// What are visual regression tests good for?
// What are their disadvantages?
// What is snapshot testing?
// When should you use snapshot tests?
// Snapshot testing vs behavioral testing?
// 14. Testing avanzado / estrategia
// What is contract testing?
// What is consumer-driven contract testing?
// What is load testing?
// What is stress testing?
// What is spike testing?
// What is endurance testing?
// What is performance testing?
// How do you test frontend performance?
// How do you test backend performance?
// How do you measure response latency?
// How do you test throughput?
// How would you detect a slow API endpoint?
// What is mutation testing?
// How does mutation testing evaluate test quality?
// Why can mutation testing be better than simply chasing coverage?
// What is property-based testing?
// How is property-based testing different from example-based testing?
// What is fuzz testing?
// When is fuzz testing useful for APIs?
// How do you test distributed systems?
// How do you test eventual consistency?
// How do you test message queues?
// How do you test idempotent APIs?
// How do you test distributed transactions?
// How do you test race conditions?
// How do you test retries safely?
// How do you test observability?
// CI/CD
// What is CI/CD?
// How do you run tests in CI?
// Which tests should run on every pull request?
// Which tests should run before deployment?
// What should happen if tests fail?
// Should E2E tests run on every commit?
// How do you parallelize tests?
// How do you handle flaky tests in CI?
// What is your testing strategy for a new feature?
// What happens during your testing pipeline?
// Feature testing
// You implemented user registration. What would you test?
// How would you test a login system?
// How would you test a CRUD application?
// How would you test a POS application?
// How would you test a social network?
// How would you test a WebSocket application?
// How would you test a chat application?
// How would you test message ordering?
// How would you test reconnection?
// How would you test a disconnected WebSocket client?
// How would you simulate a WebSocket connection?
// How would you test multiple WebSocket clients?
// How would you test message broadcasting?
// What is CI/CD?
// What is continuous integration?
// What is continuous delivery?
// What is continuous deployment?
// What happens in a CI pipeline?
// Why run tests in CI?
// What happens after a successful build?
// How do you deploy a Node.js application?
// How do you run frontend tests in CI?
// How do you run backend tests in CI?
// How do you prevent a broken build from being deployed?
// How do you manage environment variables in CI/CD?
// What is a deployment pipeline?
// What is a rollback?
// How would you deploy a React + Node application?