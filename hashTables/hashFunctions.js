function hash(key, arrayLen) {
    let total = 0;
    let RANDOM_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96;
        total = (total * RANDOM_PRIME  + value) % arrayLen
    }
    return total;
}
