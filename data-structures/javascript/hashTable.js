class HashTable {

	constructor(size) {
		this.data = new Array(size);
	}

	hashFunction(key) {
		let hash = 0
		for (let index = 0; index < key.length; index++) {
			hash = (hash + key.charCodeAt(index) * index) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this.hashFunction(key);
		console.log(`address: ${address}`);
		if(!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		const address = this.hashFunction(key);
		const currentBucket = this.data[address];
		if(currentBucket) {
			for (let index = 0; index < currentBucket.length; index++) {
				if(currentBucket[index][0] === key) {
					return currentBucket[index][1];
				}
			}
		}
		return undefined;
	}

}

	const myHashTable = new HashTable(50);
	console.log({
		myHashTable
	});
	myHashTable.set('engineer', 29);
	myHashTable.set('lawyer', 30);
	myHashTable.set('doctor', 31);
	myHashTable.set('engineer', 32); //keys must be unique, this should not been allowed.
	console.log({
		myHashTable,
		getQuantity: [
			myHashTable.get('lawyer'),
			myHashTable.get('engineer'),
			myHashTable.get('doctor'),
		]
	});