import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EventController } from './controller/event.controller';
import { EventService } from './service/event.service';
import {CompressionMiddleware} from "./middleware";

@Module({
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CompressionMiddleware)
      .forRoutes('event');
  }
}
