import {ArrayBufferConverter, getBuffer} from "../src/js/ArrayBufferConverter";

test('test' , () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    arrayBufferConverter.load(getBuffer());
    expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})