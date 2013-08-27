module.exports = new Cast();

function Cast () {};

Cast.prototype.bool = function (val, otherwise) {
	if ( val === true || val === false) {
		return val;
	}
	
	var result = {
		'true' 	: true,
		'false'	: false,
		'1' 	: true,
		'0' 	: false,
		'on' 	: true,
		'off' 	: false,
		'yes'	: true,
		'no' : false,
		1 : true,
		0 : false
	}[(new String(val)).toLowerCase()];
	
	if (result === true || result === false) {
		return result;
	}
	else {
		return otherwise;
	}
};

Cast.prototype.string = function (val, otherwise) {
	if (!val) {
		return otherwise;
	}
	else {
		return new String(val);
	}
};

Cast.prototype.int = function (val, otherwise) {
	var result = parseInt(val);
	
	if (isNaN(result)) {
		return otherwise;
	}
	else {
		return result;
	}
};

Cast.prototype.float = function (val, otherwise) {
	var result = parseFloat(val);
	
	if (isNaN(result)) {
		return otherwise;
	}
	else {
		return result;
	}
};
