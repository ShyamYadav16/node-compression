import { Transform } from 'stream';
import { brotliCompressSync } from 'zlib';

const streamLog = {"deviceId":"9bde4d3e-dfc7-4b31-90bc-9032961793c0","readings":[{"path":"","meaning":"humidity","value":24.012}],"received":1479907316977};

export const transform = new Transform({
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    this.push(JSON.stringify(chunk));
    callback();
  }
});

export const getCompressMessage = () => brotliCompressSync(JSON.stringify(streamLog));

export const getMessage = () => streamLog;