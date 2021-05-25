#!/bin/sh
echo 'Testing started ..'
echo 'Hold on for one or two minutes'
npm run --prefix receiver build
node ./receiver/dist/main.js > received_event_stream.log & RECEIVER_PID=$!
echo 'Receiver project compiled and started.'
npm run --prefix sender build
echo 'Sender project compiled and started'
cat sample_event_stream.log | node ./sender/dist/index.js
kill -15 $RECEIVER_PID
sort sample_event_stream.log > sample_event_stream.log.sort
sort received_event_stream.log  > received_event_stream.log.sort
DIFF=$(diff received_event_stream.log.sort sample_event_stream.log.sort)

if [ -z "$DIFF" ];
  then
  echo 'Well done. All events are successfully transferred.'
  else
  echo 'Failed, the received event dump does not match the sample input!'
fi
