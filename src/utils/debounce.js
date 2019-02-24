export default class Debounce {
	constructor(valueGetter, fn, wait) {
		this.valueGetter = valueGetter;
		this.fn = fn;
		this.wait = wait;

		this.values = [];

		this.callEvent = false;

		this.timer = null;

		this.prevRun = Date.now();
	}
	func = (event) => {
		if(Date.now() - this.prevRun > this.wait*2) {
			clearTimeout(this.timer)
			this.callEvent = false;
			this.values = [];
			this.timer = null;
			this.prevRun = Date.now();
		}

		this.values.push(this.valueGetter(event));
		if(this.timer === null) {
			this.timer = setTimeout(this.callFunc, this.wait);
		}
	}
	callFunc = () => {
		this.callEvent = false;
		this.fn(this.values);
		this.values = [];
		this.timer = null;
		this.prevRun = Date.now();
	}
}
