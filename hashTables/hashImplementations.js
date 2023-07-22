class Pair {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class HashMap {
    constructor() {
        this.size = 0;
        this.capacity = 2;
        this.map = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i)
        }
        return index % this.capacity;
    }

    get(key) {
        let index = this.hash(key);
        while (this.map[index] !== null) {
            if (this.map[index].key === key) {
                return this.map[index].val;
            }
            index += 1;
            index = index % this.capacity; //keeps it in bound of the HashMap
        }
        return null;
    }

    put(key, val) {
        let index = this.hash(key);

        while (true) {
            if (this.map[index] === null) {
                this.map[index] = new Pair(key, val)
                this.size += 1;

                if (this.size >= this.capactiy / 2) {
                    this.rehash();
                }
                return;

            } else if (this.map[index].key === key) {
                this.map[index].val = val;
                return
            }
            index += 1;
            index = index % this.capactiy;
        }
    }

    rehash() {
        this.capacity = 2 * this.capacity;
        let newMap = new Array(this.capactiy).fill(null);
        let oldMap = this.map;
        this.map = newMap;
        this.size = 0;
        for (let pair of oldMap) {
            if (pair) {
                this.put(pair[0], pair[1])
            }
        }
    }

    remove(key) {
        if (this.get(key) === null) {
            return;
        }
        let index = this.hash(key);
        while (true) {
            if (this.map[index].key === key) {
                this.map[index] === null;
                this.size -= 1;
                return
            }
            index += 1;
            index = index % this.capacity;
        }
    }
}
