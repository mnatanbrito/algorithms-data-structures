class ArrayQueue {
    constructor(size) {
        this.queue = new Array(size)
        this.head = this.tail = -1
    }

    enqueue(num) {
        // Conditions
        // 1. The queue is not full yet

        if (this.tail === this.queue.length - 1) {
            return null
        }

        if (this.head === -1) {
            this.head = 0
        }

        this.tail++
        this.queue[this.tail] = num

        return num
    }

    dequeue() {
        // Conditions
        // 1. The queue must have been initialized
        // 2. The head of the queue is less than or equal to the tail 
        // 3. The head is less than or equal the size of the queue
        const notInitialized = this.head === -1
        const headLessThanTail = this.head <= this.tail
        const headLessThanQueue = this.head <= this.queue.length

        if (notInitialized || !headLessThanTail || !headLessThanQueue) {
            return null
        }

        const dequeued = this.queue[this.head]

        this.head++

        return dequeued
    }

    peek() {
        // Conditions
        // 1. The queue must have been initialized

        if (this.head === -1) {
            return null
        }

        return this.queue[this.head]
    }
}

describe('Array queue', () => {
    test('Should dequeue correctly', () => {
        const queue = new ArrayQueue(10)

        expect(queue.dequeue()).toBeNull()

        queue.enqueue(1)
        expect(queue.peek()).toEqual(1)
        expect(queue.peek()).toEqual(1)

        expect(queue.dequeue()).toEqual(1)
        expect(queue.dequeue()).toBeNull()
        expect(queue.dequeue()).toBeNull()

        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        queue.enqueue(5)
        queue.enqueue(6)
        queue.enqueue(7)
        queue.enqueue(8)
        queue.enqueue(9)
        queue.enqueue(10)

        expect(queue.dequeue()).toEqual(2)
        expect(queue.dequeue()).toEqual(3)
        expect(queue.peek()).toEqual(4)
        expect(queue.dequeue()).toEqual(4)
        expect(queue.dequeue()).toEqual(5)
        expect(queue.dequeue()).toEqual(6)
        expect(queue.dequeue()).toEqual(7)
        expect(queue.dequeue()).toEqual(8)
        expect(queue.dequeue()).toEqual(9)
        expect(queue.dequeue()).toEqual(10)
        expect(queue.dequeue()).toBeNull()
        expect(queue.dequeue()).toBeNull()
    })

    // test('Should return the correct results', () => {
    //      const queue = new ArrayQueue(10)
    //      queue.enqueue(1)
    //      queue.enqueue(2)
    //      queue.enqueue(3)
    //      expect(queue.dequeue()).toEqual(1)
    //      queue.enqueue(4)
    //      queue.enqueue(5)
    //      expect(queue.dequeue()).toEqual(2)
    //      expect(queue.peak()).toEqual(2)
    //      expect(queue.peak()).toEqual(2)
    //      expect(queue.dequeue()).toEqual(3)
    //      expect(queue.peak()).toEqual(4)
    // })
})