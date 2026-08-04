package main

import (
	"fmt"
	"session1/helper"
)

func main() { // main function is special
	// filename does not matter, function main matters
	fmt.Println("Hello")
	fmt.Println("World!!!")

	helper.Dummy()
	helper.Add()

	var a = 9
	fmt.Println(a)

	var b, c, d = 1, 2, 3
	fmt.Println(b, c, d)

	f := 10
	fmt.Println(f)

	//print odd number till 10
	for i := 1; i < 10; i++ {
		if i%2 != 0 {
			fmt.Print(i)
		}
	}
}
