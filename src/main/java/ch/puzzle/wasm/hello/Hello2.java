package ch.puzzle.wasm.hello;

import org.teavm.interop.Import;
import org.teavm.interop.Export;

public class Hello2 {

    @Import(module = "env", name = "printMessage")
    private static native void printMessage(String message);

    @Export(name = "hello")
    public static void hello() {
    	printMessage("Hello, WebAssembly!");
    }
}
