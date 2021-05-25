import {CompressionMiddleware} from "./index";
import {Test, TestingModule} from "@nestjs/testing";
import * as mocks from 'node-mocks-http';

describe('CompressionMiddleware', () => {
  let compressionMiddlware;

  const response = mocks.createResponse();
  const next = jest.fn();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompressionMiddleware]
    })
      .compile();

    compressionMiddlware = module.get<CompressionMiddleware>(CompressionMiddleware);
  });

  it('should be defined', () => {
    expect(compressionMiddlware).toBeDefined();
  });

  it('should throw error if Content Encoding is missing in the headers', () => {
    const request = mocks.createRequest({
      url: '/event',
      method: 'POST',
      headers: {
        'Content-Encoding': ''
      }
    });
    try {
      compressionMiddlware.use(request, response, next);
    } catch (e) {
      expect(e.message).toContain('Content Encoding Error');
    }
  });

  it('should call next function if Content Encoding is set to brotli', () => {
    const request = mocks.createRequest({
      url: '/event',
      method: 'POST',
      headers: {
        'Content-Encoding': 'br'
      }
    });
    compressionMiddlware.use(request, response, next);
    expect(next).toHaveBeenCalled();
  });

});