var cast = require('../');

exports['bools'] = function (test) {
	test.equal(cast.bool('yes'), true);
	test.equal(cast.bool('true'), true);
	test.equal(cast.bool('no'), false);
	test.equal(cast.bool('false'), false);
	test.equal(cast.bool('on'), true);
	test.equal(cast.bool('off'), false);
	test.equal(cast.bool('1'), true);
	test.equal(cast.bool('0'), false);

	test.equal(cast.bool('parsecs', false), false);

	test.done();
};

exports['strings'] = function (test) {
	test.equal(cast.string('hello world'), 'hello world');
	test.equal(cast.string(null, 'this is the default'), 'this is the default');

	test.done();
};

exports['ints'] = function (test) {
	test.equal(cast.int("2345"), 2345);
	test.equal(cast.int(null, 0), 0);
	test.equal(cast.int("asdf", 0), 0);

	test.done();
};

exports['floats'] = function (test) {
	test.equal(cast.float("1234.432"), "1234.432");
	test.equal(cast.float(null, 0.0), 0.0);
	test.equal(cast.float("asdf", 0.0), 0.0);

	test.done();
};
