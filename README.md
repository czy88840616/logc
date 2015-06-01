# logc(Logger Colorful)
Very simple logging utility for Node.js that make slight changes to the output to make it more readable before printing it to the console.

**Example**

```js
    var logger = require('logger');
 
    logger.debug("This is an debug message");
    logger.info("This is an info message");
    logger.warn("This should not happen but we can recover from it and continue");
    logger.error("This is something that should not happen and we cannot continue");
```

![snip20150601_8](https://cloud.githubusercontent.com/assets/418820/7905679/21cc7414-084f-11e5-84e9-bd669aa714ae.png)
