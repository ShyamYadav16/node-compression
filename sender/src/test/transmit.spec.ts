import { getCompressedMessage } from "../helpers/transmitHelper";

const streamLog = {"deviceId":"9bde4d3e-dfc7-4b31-90bc-9032961793c0","readings":[{"path":"","meaning":"humidity","value":24.012}],"received":1479907316977};

describe('Transmit helper', () => {

  it('should return compressed buffer', () => {
    const buffer = getCompressedMessage(JSON.stringify(streamLog));
    expect(buffer).toBeInstanceOf(Buffer);
  });

});