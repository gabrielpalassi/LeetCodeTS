class RandomizedSet {
    private set: number[];

    constructor() {
        this.set = [];
    }

    insert(val: number): boolean {
        if (this.set.includes(val)) return false;
        this.set.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.set.includes(val)) return false;
        this.set.splice(this.set.indexOf(val), 1);
        return true;
    }

    getRandom(): number {
        return this.set[Math.floor(Math.random() * this.set.length)];   
    }
}