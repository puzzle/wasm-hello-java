(function () {

    function printMessage(message) {
        document.getElementById("message").innerHTML = message
    }

    var importObject = {
        env: {
            memory: new WebAssembly.Memory({ initial: 2, maximum: 10 }),
            printMessage
        }
    };

    WebAssembly.instantiateStreaming(fetch('wasm/hello.wasm'), importObject)
        .then(module => { module.instance.exports.hello() });

}());
