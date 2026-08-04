package main

import (
	"fmt"
	"sync"
	"time"
)

//main function do not wait for the other goroutines to finish
//we need to wait for the other goroutines to finish
//for this we use WaitGroup
/*
why?
- ensures the main goroutine waits for the multiple goroutines to finish
- prevents:
    - premature exit of main goroutine
    - incomplete concurrunt execution

what is wait group?
- a synchronous primitive from sync package
- maintains a counter of active goroutines
- main goroutine waits for the counter to reach zero
*/

// question 1 : print 1 to 5 using goroutines
func PrintNumbers(wg *sync.WaitGroup) { //pass the pointer of waitgroup
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}
	wg.Done()
}

// question 2 : launch 3 goroutines that prints "task n done". main() waits for all
func doTask(id int, wg *sync.WaitGroup) {
	fmt.Println("task", id, "done")
	wg.Done()
}

func worker(id int) {
	fmt.Println("execution of %d worker started", id)
	time.Sleep(time.Second * 1)
	fmt.Println("execution of %d worker completed", id)
}

// question 4: 3 workers processes 10 jobs.each worker prints "worker x processing job y"
// make buffered channel of size 10 and then manipulate the wait groups accordingly
func workerpool(id int, jobs chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for job := range jobs {
		fmt.Println("worker", id, "processing job", job)
		time.Sleep(time.Second * 1)
	}
}

//q1
//func main() {
//	var wg sync.WaitGroup
//	wg.Add(1)
//	go PrintNumbers(&wg) //pass the address reference of waitgroup
//	wg.Wait()
//}

// q2
//func main() {
//	var wg sync.WaitGroup
//	for i := 1; i <= 3; i++ {
//		wg.Add(1)
//		go doTask(i, &wg)
//	}
//	wg.Wait()
//}

// q3
//func main() {
//	var wg sync.WaitGroup
//	for i := 1; i <= 5; i++ {
//		wg.Go(func() {
//			worker(i)
//		})
//	}
//	wg.Wait()
//}

func main() {
	const numJobs = 10
	const numWorkers = 3
	jobs := make(chan int, numJobs)
	var wg sync.WaitGroup
	for i := 1; i <= numWorkers; i++ {
		wg.Add(1)
		go workerpool(i, jobs, &wg)
	}
	for i := 1; i <= numJobs; i++ {
		jobs <- i
	}
	close(jobs)
	wg.Wait()
}
