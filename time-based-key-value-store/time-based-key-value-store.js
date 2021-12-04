
var TimeMap = function() {
    this.fooWithTimestamp = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.fooWithTimestamp.hasOwnProperty(key)) {
        this.fooWithTimestamp[key] = {}
    }
    this.fooWithTimestamp[key][timestamp] = value
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.fooWithTimestamp.hasOwnProperty(key)) {
        return ""
    }
    while (!this.fooWithTimestamp[key].hasOwnProperty(timestamp) && timestamp >= 1) {
        timestamp--
    }
    if (timestamp === 0) {
        return ""
    }
    return this.fooWithTimestamp[key][timestamp]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */