package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("starting server on port 8090")
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello World")
	})

	http.ListenAndServe(":8090", nil)
}
