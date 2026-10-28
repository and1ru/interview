// What is NoSQL?
// What does NoSQL mean?
// What are the main types of NoSQL databases?
// What are the four main types of NoSQL databases?
// What is the difference between SQL and NoSQL?
// What are the advantages of NoSQL?
// What are the disadvantages of NoSQL?
// When would you choose NoSQL over SQL?
// When would you choose SQL over NoSQL?
// What is a document database?
// What is a key-value database?
// What is a column-family database?
// What is a graph database?
// What is eventual consistency?
// What is horizontal scaling?
// What is schema flexibility?
// What is MongoDB?
// What type of database is MongoDB?
// Why is MongoDB considered a NoSQL database?
// What are the main features of MongoDB?
// What are the advantages of MongoDB?
// What are the disadvantages of MongoDB?
// When would you use MongoDB?
// When would MongoDB be a bad choice?
// SQL vs MongoDB
// When would you use MongoDB instead of MySQL?
// What are the advantages of MongoDB over MySQL?
// What are the disadvantages of MongoDB compared with MySQL?
// Is MongoDB faster than MySQL?
// Is NoSQL always more scalable than SQL?
// Is NoSQL schema-less?
// Which database would you choose for a banking application?
// Which database would you choose for a social network?
// Which database would you choose for an e-commerce application?
// Can SQL and NoSQL be used together?
// MongoDB vs PostgreSQL?
// MongoDB vs MySQL?
// MongoDB structure
// What is a database in MongoDB?
// What is a collection?
// What is a document?
// What is a field?
// Collection vs table?
// Document vs row?
// Field vs column?
// Can documents in the same collection have different fields?
// Can two documents have different structures?
// What is BSON?
// BSON vs JSON?
// Why does MongoDB use BSON?
// What types does BSON support that JSON doesn't?
// What is an ObjectId?
// Why does MongoDB use ObjectId?
// What is the structure of an ObjectId?
// Can _id be a string instead of ObjectId?
// What is _id?
// Why does every MongoDB document have an _id?
// What happens if you don't provide _id?
// Is ObjectId globally unique?
// Can you create your own _id?
// Why might you choose UUID/string IDs instead of ObjectId?
// CRUD
// How do you insert a document?
// insertOne() vs insertMany()?
// How do you find documents?
// find() vs findOne()?
// How do you update a document?
// updateOne() vs updateMany()?
// How do you delete documents?
// deleteOne() vs deleteMany()?
// What does replaceOne() do?
// What is upsert?
// How do you perform an upsert?
// What is findById()?
// What is findOneAndUpdate()?
// What is findOneAndDelete()?
// Queries
// How do you query a nested field?
// How do you query an array?
// How do you query documents where a field exists?
// How do you query for NULL?
// How do you query multiple conditions?
// What does $eq do?
// What does $ne do?
// What does $gt do?
// What does $gte do?
// What does $lt do?
// What does $lte do?
// What does $in do?
// What does $nin do?
// What does $and do?
// What does $or do?
// What does $not do?
// What does $exists do?
// What does $regex do?
// What is dot notation?
// How do you update nested fields?
// Projection / sorting / pagination
// What is projection?
// Why would you use projection?
// How do you return only selected fields?
// How do you exclude fields?
// What is the difference between including and excluding fields?
// How do you sort MongoDB results?
// What does sort() do?
// What does limit() do?
// What does skip() do?
// How would you paginate MongoDB results?
// What are the disadvantages of skip/limit for large datasets?
// How would you implement cursor-based pagination?
// Data modeling
// How do you design a MongoDB schema?
// How is MongoDB schema design different from SQL schema design?
// What is embedding?
// What is referencing?
// Embedding vs referencing?
// When should you embed documents?
// When should you reference documents?
// What are the advantages of embedding?
// What are the disadvantages of embedding?
// What are the advantages of referencing?
// What are the disadvantages of referencing?
// Does MongoDB automatically enforce foreign keys?
// Does MongoDB automatically perform joins like SQL?
// How would you maintain referential integrity?
// Why shouldn't you store an unbounded array inside a MongoDB document?
// Why does document size matter when designing MongoDB schemas?
// Aggregation
// What is the MongoDB aggregation pipeline?
// Why use aggregation?
// What is an aggregation stage?
// What does $match do?
// What does $group do?
// What does $project do?
// What does $sort do?
// What does $limit do?
// What does $skip do?
// What does $unwind do?
// What does $lookup do?
// What does $addFields do?
// What does $count do?
// What does $facet do?
// What does $bucket do?
// $match vs $project?
// Where should $match be placed in a pipeline?
// Why is filtering early often beneficial?
// What does $lookup do?
// $lookup vs SQL JOIN?
// When should you use $lookup?
// Is $lookup always a bad idea?
// How can $lookup affect performance?
// What does $unwind do?
// When would you use $unwind?
// When is find() enough?
// When should you use aggregation?
// Can aggregation replace complex queries?
// Aggregation coding
// Find the top-selling products.
// Calculate revenue by month.
// Find the average order value.
// Count users by country.
// Find the most active users.
// Find the top 5 customers by spending.
// Find orders containing a particular product.
// Calculate total sales by category.
// Get users with more than 10 orders.
// Get the latest order for every user.
// Get all users and their orders.
// Get products with their categories.
// Find customers without orders.
// Find products that have never been purchased.
// Find the top 3 products in every category.
// Calculate monthly revenue.
// Count documents per category.
// Calculate total sales.
// Calculate average price.
// Find maximum value per group.
// Arrays
// How do you query an array?
// What does $elemMatch do?
// $in vs $all?
// What does $push do?
// What does $addToSet do?
// $push vs $addToSet?
// What does $pull do?
// What does $pop do?
// What does $each do?
// What does $slice do?
// How do you update one element in an array?
// What is the positional $ operator?
// What are filtered positional operators?
// What does $size do?
// Indexes
// What is an index in MongoDB?
// Why do indexes improve query performance?
// What are the disadvantages of indexes?
// When should you create an index?
// When should you avoid creating an index?
// What is a single-field index?
// What is a compound index?
// What is a multikey index?
// What is a text index?
// What is a geospatial index?
// What is a hashed index?
// What is a wildcard index?
// What is a clustered index?
// Why does field order matter in compound indexes?
// What is an index prefix?
// Which queries can use a compound index?
// Why can't MongoDB efficiently use {a: 1, b: 1} for a query only on b?
// How do you choose the order of fields in a compound index?
// Can you index an array?
// What happens when you index an array?
// What is a multikey index?
// explain / performance
// What is explain()?
// Why use explain()?
// How do you identify a collection scan?
// What is COLLSCAN?
// What is IXSCAN?
// How can you determine whether an index is being used?
// How would you optimize a slow MongoDB query?
// What metrics from explain() would you inspect?
// How do indexes improve performance?
// How can projection improve performance?
// Why can huge documents become problematic?
// What is a collection scan?
// What is an index scan?
// What is N+1 in MongoDB?
// How do you identify N+1 in MongoDB?
// How do you fix N+1 in MongoDB?
// Schema validation
// Is MongoDB schema-less?
// What does schema flexibility mean?
// Can MongoDB enforce a schema?
// What is MongoDB schema validation?
// What is JSON Schema validation?
// Why would you use schema validation?
// Transactions / atomicity
// Does MongoDB support transactions?
// When were multi-document transactions introduced?
// Why would you use a MongoDB transaction?
// When should you avoid transactions?
// What is a session?
// What is startTransaction()?
// What is commitTransaction()?
// What is abortTransaction()?
// What is withTransaction()?
// Are MongoDB single-document writes atomic?
// When do you need a multi-document transaction?
// What does atomicity mean in MongoDB?
// Are document updates atomic?
// Can MongoDB update multiple documents atomically?
// When is a transaction necessary?
// You need to create an order and decrease inventory. Would you use a transaction?
// How would you guarantee inventory consistency?
// What happens if an order succeeds but inventory update fails?
// Replication
// What is replication?
// What is a replica set?
// Why use replica sets?
// What is the primary?
// What are secondary nodes?
// What happens if the primary fails?
// What is automatic failover?
// Can you read from secondaries?
// What is replication lag?
// What happens when the primary goes down?
// How is a new primary selected?
// What happens to writes during failover?
// What is read preference?
// What is write concern?
// What is read concern?
// What does w: "majority" mean?
// How does write concern affect durability?
// How does read preference affect consistency?
// Sharding
// What is sharding?
// Why would you shard a MongoDB database?
// Replication vs sharding?
// What is a shard?
// What is a shard key?
// How do you choose a shard key?
// What is a poor shard key?
// What is high cardinality?
// What is a monotonically increasing shard key?
// What is a hotspot?
// What is a sharded cluster?
// What is query routing?
// What is a mongos?
// What is a config server?
// What is a chunk?
// How does chunk migration work?
// What is the balancer?
// Change Streams / special features
// What are MongoDB Change Streams?
// When would you use Change Streams?
// How can Change Streams be used for real-time applications?
// Change Streams vs polling?
// What is a capped collection?
// When would you use a capped collection?
// What are the limitations of a capped collection?
// What is a TTL index?
// When would you use a TTL index?
// What is a text index?
// How does MongoDB text search work?
// What is MongoDB Search?
// What is vector search?
// What is MongoDB Vector Search?
// What is semantic search?
// Vector search vs text search?
// What are geospatial indexes?
// How do you query nearby locations?
// What is GeoJSON?
// What is a time-series collection?
// Security
// How do you secure MongoDB?
// How does MongoDB authentication work?
// What is authorization in MongoDB?
// What are MongoDB roles?
// What is role-based access control?
// How should database credentials be stored?
// Should MongoDB be publicly exposed to the internet?
// What is NoSQL injection?
// How can MongoDB queries be exploited?
// How do you prevent NoSQL injection?
// Why is passing user-controlled objects directly into a MongoDB query dangerous?
// How do you validate request bodies?
// How do you sanitize MongoDB queries?
// Mongoose
// What is Mongoose?
// Why use Mongoose?
// Mongoose vs MongoDB native driver?
// What is a Mongoose schema?
// What is a Mongoose model?
// What is a Mongoose document?
// What is a schema type?
// What is validation in Mongoose?
// What are virtuals?
// What are getters and setters?
// What are middleware/hooks?
// What is populate()?
// populate() vs $lookup?
// When should you avoid populate()?
// What does .lean() do?
// When should you use .lean()?
// What are the tradeoffs of .lean()?
// What does .exec() do?
// How does Mongoose validation work?
// Does Mongoose validation replace API validation?
// How do you define an index in Mongoose?
// How do you create a compound index in Mongoose?
// What are Mongoose middleware?
// How do you test Mongoose queries?
// Node + MongoDB
// How do you connect Node.js to MongoDB?
// What MongoDB driver have you used?
// Native MongoDB driver vs Mongoose?
// How do you handle MongoDB connection errors?
// How do you handle MongoDB transactions from Node.js?
// How do you prevent NoSQL injection from Node.js?
// How do you validate MongoDB data in an Express API?
// MongoDB + WebSockets
// How would MongoDB integrate with WebSockets?
// Should MongoDB send messages directly to clients?
// How would you detect new messages?
// Would you use polling or Change Streams?
// How would you scale WebSocket servers?
// What happens if you have multiple Node.js instances?
// How would you test WebSocket reconnection?
// How would you test message ordering?
// Social Network-specific
// Why did you choose MongoDB for the social network?
// How would you model users?
// How would you model friend requests?
// How would you model friendships?
// Would friendship be embedded or referenced?
// How would you model posts?
// How would you model comments?
// How would you model likes?
// How would you model chats?
// How would you model messages?
// How would you paginate messages?
// What indexes would you create?
// How would you find all messages in a room efficiently?
// How would you retrieve the latest conversations?
// How would you handle millions of messages?
// Would you use MongoDB Change Streams?
// POS-specific
// Why would you use MongoDB for a POS?
// Would MySQL or MongoDB be better for a POS?
// How would you model products?
// How would you model inventory?
// How would you model sales?
// Would you embed sale details?
// What happens when a sale contains hundreds of products?
// How would you maintain stock consistency?
// How would you handle concurrent updates?
// When would you use transactions?
// What indexes would you create?
// How would you retrieve daily revenue?
// How would you calculate top-selling products?
// Would aggregation be useful?
// What aggregation pipeline would you use to calculate daily sales?
// Advanced
// What is WiredTiger?
// What is a storage engine?
// What is journaling?
// What is the oplog?
// How does replication use the oplog?
// What is a chunk in sharding?
// How does chunk migration work?
// What is query routing?
// What is a mongos?
// What is a config server?
// How does a sharded cluster work?
// What is the balancer?
// What is a hidden replica set member?
// What is an arbiter?
// What is read scaling?
// What is write scaling?
// What is replication lag?
// How do you backup MongoDB?
// How do you restore MongoDB?
// What is point-in-time recovery?
// How do you monitor MongoDB?