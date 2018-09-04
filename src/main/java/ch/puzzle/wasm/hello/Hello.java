package ch.puzzle.wasm.hello;

import org.teavm.interop.Import;
import org.teavm.interop.Export;

public class Hello {

    @Import(module = "env", name = "printMessage")
    private static native void printMessage(int message);

    @Export(name = "hello")
    public static void hello() {
    	printMessage(42);
    }
}
