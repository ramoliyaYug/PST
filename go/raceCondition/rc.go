package main

import (
	"fmt"
	"sync"
)

var balance = 1000
var mu sync.Mutex

func deduct(amount int, wg *sync.WaitGroup) {
	defer wg.Done()
	mu.Lock()
	if balance >= amount {
		balance -= amount
	}
	mu.Unlock()
}

func main() {
	amount := 10
	var wg sync.WaitGroup
	for i := 1; i <= 100; i++ {
		wg.Add(1)
		go deduct(amount, &wg)
	}
	wg.Wait()
	fmt.Println(balance)
}
