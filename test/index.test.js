describe('test suit', function() {
	it('test console', function() {
		var logger = require('../index');
		
		logger.info('info logger');
		logger.error('wrong error');
		logger.warn('must gogogogo');
		logger.debug('hello world');
	})
})