import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from '../controller/event.controller';
import { EventService } from "../service/event.service";
import * as mocks from 'node-mocks-http';
import { getCompressMessage, transform } from "../helpers/event.helper";

describe('EventController', () => {
  let controller: EventController;

  const mockEventService = {
    decompressMessage: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [EventService]
    })
      .overrideProvider(EventService)
      .useValue(mockEventService)
      .compile();

    controller = module.get<EventController>(EventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should invoke events in postEvents controller and call decompressMessage service', () => {
    const request = transform;
    const response = mocks.createResponse();
    controller.postEvents(request, response);
    request.emit('data', getCompressMessage());
    request.emit('end');

    expect(mockEventService.decompressMessage).toHaveBeenCalled();
    expect(mockEventService.decompressMessage).toHaveBeenCalledWith(getCompressMessage());
  });
});
