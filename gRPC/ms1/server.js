const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("./greeter.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);

// No package in proto, so service is at root
const Greeter = grpcObject.Greeter;

function sayHello(call, callback) {
  callback(null, { message: `Hello ${call.request.name}` });
}

const server = new grpc.Server();
server.addService(Greeter.service, { SayHello: sayHello });

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("🚀 gRPC Server running at 0.0.0.0:50051");
    server.start();
  }
);
