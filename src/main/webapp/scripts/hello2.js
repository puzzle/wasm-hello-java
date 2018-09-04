(function () {

    const getInt = (heap, offset) => {
        return heap[offset + 0] |
            heap[offset + 1] << 8 |
            heap[offset + 2] << 16 |
            heap[offset + 3] << 24;
    };

    function printMessage(message) {
        // Implementation based on https://stackoverflow.com/questions/31206851/how-much-memory-does-a-string-use-in-java-8 and heap dump analysis
        var charArrayOffset = getInt(heap, message + 8);
        var charArrayLength = getInt(heap, charArrayOffset + 8);
        var arrayDataStart = charArrayOffset + 12;
        var arrayDataEnd = arrayDataStart + charArrayLength * 2;
        var string = new TextDecoder('utf-16').decode(heap.slice(arrayDataStart, arrayDataEnd));

        document.getElementById("message2").innerHTML = string
    }

    var memory = new WebAssembly.Memory({ initial: 2, maximum: 10 });
    var heap;
    var importObject = {
        env: {
            memory,
            printMessage
        }
    };

    WebAssembly.instantiateStreaming(fetch('wasm/hello2.wasm'), importObject)
        .then(module => {
            heap = new Uint8Array((module.instance.exports.memory || memory).buffer);
            module.instance.exports.hello()
        });

}());
