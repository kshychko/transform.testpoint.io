# transform.testpoint.io
A JSON &lt;-> XML transformation service for UBL messages.

Node JS Express web application.


## Deployment

### Local installation

To loop the application (will restart after any crash):
`forever --minUptime 100 start bin/www`

To loop in non-daemon mode (useful for debug):
`forever --minUptime 100 bin/www`

The port can be set with PORT variable, the default port is 3000:
`export PORT=3050`
`forever ...`

### Docker-based installation

if you have docker-compose (`pip install docker-compose`) you can use it:

`docker-compose up` or `docker-compose up -d` for detached (daemon) mode.

This will listen 3030 port, check docker-compose.yml for details about the port.
