class Block {
    constructor({ timestamp, prev_hash, hash, data })
    {
        this.timestamp = timestamp;
        this.prev_hash = prev_hash;
        this.hash = hash;
        this.data = data;

    }

    const block1 = new Block (
        {
            timestamp: "14/03/2023"
            prev_hash: "00089"
            hash: "6655"
            data: "hello Rimi"

        }

    )
     
}

console.log(block1);