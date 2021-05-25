import { brotliCompressSync } from 'zlib';
import { receiverClient } from '../client/receiverClient';
import { TransformCallback } from "stream";

/**
 * Compress the received message using brotli algorithm to binary data
 * @param {string} eventMsg
 * @returns {Buffer}
 */
export const getCompressedMessage = (eventMsg: string): Buffer => {
  return brotliCompressSync(eventMsg);
};

/**
 * Receives event message, compress it and makes a post request to event API with the compressed message.
 * @param {string} eventMsg
 * @param {BufferEncoding} encoding
 * @param {module:stream.internal.TransformCallback} callback
 */
export const transmitHelper = (eventMsg: string, encoding: BufferEncoding, callback: TransformCallback) => {
  receiverClient.post('event', {body: getCompressedMessage(eventMsg)}, (err, res) => {
    callback(err);
  });
};

