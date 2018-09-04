# WebAssembly Hello, World!

This is a minimal WebAssembly "Hello, World!" example implemented in Java for web browsers.
It needs to be compiled with [TeaVM](http://teavm.org/).
A WebAssembly capable browser is needed to run the example, e.g. Firefox 52 or later, Chrome 57 or later,
Edge 16 or later, Safari 11 or later.

## Compile and Start without Docker

Requires Java 8 and Maven 3.

```sh
git clone https://github.com/puzzle/wasm-hello-java
cd wasm-hello-java
mvn package
```

Then point your browser at http://localhost:8080.

## Compile and Start with Docker

Requires Docker, tested with 1.13.1.

```sh
git clone https://github.com/puzzle/wasm-hello-java
cd wasm-hello-java
docker run --rm -it -p 8080:8080 -v `pwd`:/src maven:3-jdk-8 /bin/bash
cd /src
mvn package
```

Then point your browser at http://localhost:8080.
