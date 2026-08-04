package main

import (
	"fmt"
	"main/utils"
	"time"
)

type coordinates struct {
	longitude float64
	latitude  float64
}

func main() {
	var c coordinates
	c.longitude = 1.0
	c.latitude = 2.0
	fmt.Println(c)

	yug := utils.User{
		FirstName: "Yug",
		LastName:  "Ramoliya",
		CreatedAt: time.Now(),
	}

	fmt.Println(yug)
}
