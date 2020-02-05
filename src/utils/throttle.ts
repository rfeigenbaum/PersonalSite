//Credit: https://highrise.digital/blog/how-to-throttle-javascript-functions/

export default function throttle (this: any, callback: Function, limit: number) {
    var wait = false;
    return function (this: any) {
        if (!wait) {
            callback.call(this);
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    }
}