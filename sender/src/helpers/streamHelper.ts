import { PassThrough, Transform } from "stream";
import { transmitHelper } from "./transmitHelper";

/**
 * This is a Transform stream which helps to add delay.
 * @type {module:stream.internal.Transform}
 */
export const parseAndDelay = new Transform({
  objectMode: true, // Stream behaves as a stream of objects
  transform(chunk, encoding, callback) {
    // If message is empty, not necessary to add delay.
    if(chunk === '') return callback();
    try {
      // set the a delay between 0 and 1000 ms
      let delay = Math.round(Math.random() * 1000);
      setTimeout((() => callback(null, chunk)), delay);
    } catch(e) {
      callback(e);
    }
  }
});

/**
 * Passes received input to transmit helper
 * @type {module:stream.internal.PassThrough}
 */
export const passThrough = new PassThrough({
  objectMode: true, // Stream behaves as a stream of objects
  transform: transmitHelper
});