import { TestCase } from "@contend/core"
import { assert_equal } from "@contend/assertions"
import { ClassMock } from "../lib/class_mock"

export class ClassMockTest extends TestCase {
  "test expecting a method stubs that method"() {
    class ExampleClass {}
    let mock = new ClassMock(ExampleClass)

    mock.expects("method").returns("value")

    assert_equal("value", ExampleClass.method())
  }

  "test resets stubbed methods when verified"() {
    class ExampleClass {}
    let mock = new ClassMock(ExampleClass)

    mock.expects("method")
    ExampleClass.method();
    mock.verify()

    assert_equal(undefined, ExampleClass.method)
  }
}