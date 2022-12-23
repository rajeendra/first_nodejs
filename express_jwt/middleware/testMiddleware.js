const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const testLogEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
}

const testConsole = (message) => {
    return (req, res, next) => {
      // implement your business logic using 'myParam'
      // ...

      const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
      const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  
      console.log(logItem);

      // System will hangup if this next() comment out
      next();
    }
  }


  const testConsoleTwo = (message) => {
    return (req, res, next) => {
      // implement your business logic using 'myParam'
      // ...

      const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
      const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  
      console.log(logItem);

      // System will hangup if this next() comment out
      next();
    }
  }


const paramMiddleware = (myParam) => {
    return (req, res, next) => {
      // implement your business logic using 'myParam'
      // ...
      next();
    }
  }

//module.exports = { testConsole, testLogEvents };
module.exports = {testConsole, testConsoleTwo};

