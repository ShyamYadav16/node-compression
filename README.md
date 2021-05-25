## Node compression

This is a framework for building a simple client and server in Node.js.

##Assumptions
    
    1. Multiple sensors are simulating system data and creating logs in a remote server.
    2. From the remote server, these logs needs to be read and compared to see if the data is the same.
    3. Due to the limited bandwidth of the connection between client and server, the messages that is being transmitted must be compressed.
    4. The latency for any given message should be less than 2 seconds.