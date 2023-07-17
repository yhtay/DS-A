class HashTable {
    constructor (size = 53) {
        this.keyMap = newArray(size);
    }

    _hash (key) {
        let total = 0;
        let RANDOM_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * RANDOM_PRIME + value) % this.keyMap.length;
        }
        return total
    }

    set (key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
}

let ht = new HashTable();
ht.set("hello world", "goodbye")
