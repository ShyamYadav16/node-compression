import { Controller, Post, Req, Res } from '@nestjs/common';
import { EventService } from "../service/event.service";
import {ApiHeader, ApiOkResponse, ApiResponse, ApiTags} from "@nestjs/swagger";

/**
 * EventController represents event APIs
 */
@Controller('event')
@ApiTags('Event')
@ApiHeader({
  name: 'Content-Encoding',
  description: 'Brotli compression is enabled on the server'
})
export class EventController {

  constructor(private eventService: EventService) {}

  /**
   * Post event API receives message events, compresses the message and writes them to stdout.
   * @param request
   * @param response
   */
  @Post()
  @ApiResponse({status: 403, description: 'Content Encoding Error'})
  @ApiResponse({status: 201, description: 'Server successfully process the request'})
  postEvents(@Req() request, @Res() response) {
    request.on('data', (message) => {
      const msg = this.eventService.decompressMessage(message);
      process.stdout.write(`${msg}\n`)
    });
    request.on('end', () => {
      response.end();
    });
  }

}
