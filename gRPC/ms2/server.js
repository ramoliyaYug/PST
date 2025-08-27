const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Load the proto definition
const packageDef = protoLoader.loadSync("./greeter.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);

const Greeter = grpcObject.Greeter;

// Create client instance
const client = new Greeter(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

// Call SayHello RPC
client.SayHello({ name: "ananya" }, (err, response) => {
  if (err) {
    console.error("Error calling SayHello:", err);
    return;
  }
  console.log("Response from server:", response.message);
});
