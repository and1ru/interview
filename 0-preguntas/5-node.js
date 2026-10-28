// What is Node.js?
// What is the difference between JavaScript and Node.js?
// Is Node.js single-threaded?
// Does Node.js use multiple threads?
// What is Node.js used for?
// What kind of functions are supported by Node.js?
// What is a module in Node.js?
// What is npm?
// What are the advantages of npm?
// What is package.json?
// What is package-lock.json?
// What are dependencies and devDependencies?
// What is the difference between dependencies and devDependencies?
// What are npm scripts?
// What is semantic versioning?
// What does ^ mean in package versions?
// What does ~ mean in package versions?
// What is npm install vs npm ci?
// What is a peer dependency?
// Modules
// How do you import a module in Node.js?
// What is CommonJS?
// What are ES Modules?
// CommonJS vs ES Modules?
// What is require()?
// What is import?
// What is module.exports?
// What is exports?
// What is the difference between module.exports and exports?
// What is dynamic import()?
// What is a built-in module?
// What is a third-party module?
// What is a local module?
// Event loop / concurrency
// How does Node.js handle concurrency despite being single-threaded?
// What is control flow in Node.js?
// What is the event loop in Node.js?
// What is the call stack?
// What is the callback queue?
// What is the microtask queue?
// What is libuv?
// What is V8?
// What is the relationship between Node.js, V8 and libuv?
// What is the libuv thread pool?
// What kind of operations use the thread pool?
// What happens when Node.js performs an I/O operation?
// What causes the event loop to be blocked?
// What is event loop latency?
// What is event loop lag?
// Express
// What is Express?
// Why is Express used with Node.js?
// How does Express handle a request?
// What is routing in Express?
// What is app.use()?
// What is app.get()?
// What is app.post()?
// What is the difference between app.use() and app.get()?
// What are route parameters?
// What are query parameters?
// What is a request body?
// What is the difference between req.params, req.query and req.body?
// What is middleware?
// How does middleware work in Express?
// What is next()?
// What happens if middleware doesn't call next()?
// What is application-level middleware?
// What is router-level middleware?
// What is error-handling middleware?
// How do you create custom middleware?
// In what order does Express execute middleware?
// What is the difference between a controller and middleware?
// What is the difference between a controller and a service?
// How do you structure an Express application?
// REST / HTTP
// What is a REST API?
// What are REST principles?
// What is an endpoint?
// What is a resource?
// What are HTTP methods?
// GET vs POST?
// GET vs PUT?
// PUT vs PATCH?
// PATCH vs POST?
// What is DELETE?
// What makes an API RESTful?
// What is idempotency?
// How would you design a REST API?
// What are HTTP status codes?
// What is 200?
// What is 201?
// What is 204?
// What is 400?
// What is 401?
// What is 403?
// What is 404?
// What is 409?
// What is 422?
// What is 429?
// What is 500?
// What is the difference between 401 and 403?
// Authentication / authorization
// What is authentication?
// What is authorization?
// Authentication vs authorization?
// How do you authenticate a user?
// How do JWTs work?
// What is a JWT?
// What are the components of a JWT?
// Access token vs refresh token?
// Where should tokens be stored?
// Cookies vs localStorage?
// What is an HttpOnly cookie?
// What is a Secure cookie?
// What is role-based authorization?
// What is permission-based authorization?
// How do you protect routes?
// How do you protect routes by role?
// How do you handle logout?
// How do you handle expired tokens?
// CORS
// What is CORS?
// Why does CORS exist?
// How does the browser enforce CORS?
// What is a preflight request?
// What is an OPTIONS request?
// What is Access-Control-Allow-Origin?
// What is the difference between CORS and authentication?
// How do you handle CORS in Express?
// Error handling
// How do you handle errors in Express?
// What is error-handling middleware?
// What is the difference between operational errors and programmer errors?
// How do you handle asynchronous errors?
// What happens when an async route throws an error?
// How would you create a global error handler?
// Why shouldn't you expose internal errors to the client?
// How do you handle rejected Promises in Express?
// Security
// What is SQL injection?
// What is XSS?
// What is CSRF?
// How do you prevent SQL injection?
// How do you protect passwords?
// Why should passwords be hashed?
// What is bcrypt?
// What is rate limiting?
// What is Helmet?
// How do you secure an Express API?
// How do you validate user input?
// How do you prevent brute-force attacks?
// How do you store secrets?
// Environment
// What are environment variables?
// How do you use .env in Node.js?
// Why shouldn't secrets be committed to Git?
// How do you manage secrets in production?
// Performance / scalability
// What are the key performance metrics we monitor in Node.js?
// How do you measure Node.js performance?
// What metrics would you monitor?
// What is CPU usage?
// What is memory usage?
// What is throughput?
// What is latency?
// How do you identify a bottleneck?
// How do you profile a Node.js application?
// How do you improve scalability?
// How would you scale a Node.js application?
// Vertical scaling vs horizontal scaling?
// How can you scale an Express API?
// What is load balancing?
// Why might you use multiple Node.js processes?
// What is stateless architecture?
// How does caching help scalability?
// What is Redis?
// What data would you cache?
// What problems can caching introduce?
// Memory
// How do you ensure performance and avoid memory leaks?
// What is a memory leak?
// What causes memory leaks in Node.js?
// How can closures cause memory leaks?
// How can event listeners cause memory leaks?
// How do you detect a memory leak?
// How do you profile memory usage?
// Worker Threads / cluster
// What are Worker Threads?
// When should you use Worker Threads?
// What problem do Worker Threads solve?
// Worker Threads vs child processes?
// What is the Cluster module?
// What problem does Cluster solve?
// Cluster vs Worker Threads?
// When would you use Cluster?
// Does Cluster make Node.js code multi-threaded?
// Streams / Buffers
// What is a Buffer?
// Why does Node.js need Buffers?
// Buffer vs string?
// When would you use a Buffer?
// What are streams in Node.js?
// What are the different types of streams?
// What is a Readable stream?
// What is a Writable stream?
// What is a Duplex stream?
// What is a Transform stream?
// What is piping?
// What is backpressure?
// Why are streams useful for large files?
// Timers
// What is the timers module?
// What is setTimeout()?
// What is setInterval()?
// What is setImmediate()?
// What is process.nextTick()?
// What is the difference between setImmediate() and process.nextTick()?
// What is the difference between setTimeout() and setImmediate()?
// When is each timer executed?
// Child processes
// What is a child process?
// What is spawn()?
// What is exec()?
// What is execFile()?
// What is fork()?
// What is the difference between spawn() and fork()?
// What is the difference between spawn() and exec()?
// What is a forked process?
// Other Node concepts
// What is REPL?
// What is the process object?
// What is process.env?
// What is process.argv?
// What is process.exit()?
// What are process signals?
// What is the crypto module?
// Explain the crypto module in Node.js.
// What are Promises in Node.js?
// What is event-driven programming in Node.js?
// What is callback hell?
// What are the three methods to avoid callback hell?
// What is body-parser?
// Is body-parser still necessary in modern Express?
// What is Passport?
// What is Passport.js used for?
// Express vs Koa?
// What is the most popular Node.js framework these days?
// What are the main disadvantages of Node.js?
// Architecture / production
// What is graceful shutdown?
// How do you gracefully shut down a Node.js server?
// What happens to active connections during shutdown?
// What is MVC?
// What is separation of concerns?
// What is dependency injection?
// What is a service layer?
// Why shouldn't controllers contain all business logic?
// How would you structure a scalable Node.js application?
// How would you design authentication?
// How would you scale an API?
// Where would you use caching?
// How would you handle thousands of users?
// Testing
// How do you test a Node.js API?
// What is Supertest?
// Supertest vs Postman?
// Supertest vs Playwright?
// How do you test an Express route with Supertest?
// How do you test middleware?
// How do you test authentication middleware?
// How do you test authorization middleware?
// How do you test controllers?
// How do you test services?
// How do you test repositories?
// How do you test database operations?
// How do you test transactions?
// How do you test external APIs?
// What is HTTP?
// How does HTTP work?
// What is an HTTP request?
// What is an HTTP response?
// What is a request method?
// What are HTTP headers?
// What is a request body?
// What is a query parameter?
// What is a path parameter?
// What are HTTP status codes?
// What is the difference between 200 and 201?
// What is the difference between 204 and 200?
// What is the difference between 400 and 422?
// What is the difference between 401 and 403?
// What is 409?
// What is 429?
// What is 500?
// What is REST?
// What is an endpoint?
// What is idempotency?
// What is content negotiation?
// What is JSON over HTTP?
// What is CORS?
// What is a preflight request?
// What is authentication?
// What is authorization?
// What are cookies?
// What are sessions?
// What is a bearer token?
// What is an access token?
// What is a refresh token?
// 20. Arquitectura / Full Stack
// También te recomendé una pequeña sección para evitar que toda tu preparación quedara enfocada exclusivamente en preguntas aisladas.

// How would you design a REST API?
// How would you structure a Node.js application?
// How would you structure a React application?
// How would you design authentication?
// How would you design authorization?
// How would you scale an API?
// How would you design a chat application?
// How would you design a notification system?
// How would you design the database?
// Where would you use caching?
// How would you handle thousands of users?
// How would you design a POS system?
// How would you design a social network?
// How would you design a restaurant ordering system?
// How would you design a file-upload system?
// How would you handle image uploads?
// How would you handle real-time communication?
// How would you scale WebSocket servers?
// How would you handle database bottlenecks?
// How would you handle a slow API?
// How would you handle a high number of concurrent requests?
// 21. Preguntas de entrevista que atraviesan varias tecnologías
// Estas son especialmente importantes porque un entrevistador puede comenzar en una tecnología y llevarte a otra.

// Why did you choose TypeScript for your React application?
// Why did you choose TypeScript for your Node backend?
// Why did you choose MySQL for your POS?
// Why did you choose MongoDB for your social network?
// SQL vs MongoDB?
// When would you use SQL instead of MongoDB?
// When would you use MongoDB instead of SQL?
// How would you model the same application in SQL and MongoDB?
// How would you test a full-stack feature?
// How would you test a login flow from frontend to backend?
// How would you test a sale flow from frontend to backend?
// How would you test a chat flow?
// How would you handle authentication between React and Node?
// How would you share types between React and Node?
// How would you validate API data on both frontend and backend?
// How would you prevent SQL and NoSQL injection?
// How would you handle errors from frontend to backend?
// How would you handle loading and error states?
// How would you deploy React + Node + database?
// How would you containerize React + Node + database?
// How would you run tests in CI before deployment.