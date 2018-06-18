export default function Defer(duration) {
    this.timer = '';
    this.deferred = '';
    this.duration = duration || 2000;
};

Defer.prototype.do = function(argument) {
    if (this.deferred != argument) {
        this.deferred = argument;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => { this.deferred = '' }, this.duration);
        return true;
    }
};
