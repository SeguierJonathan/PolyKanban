package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
)

type Board struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "helloworld")
}

func getAll(w http.ResponseWriter, r *http.Request) {

	board := Board{Id: 1, Name: "je suis name"}
	w.Header().Set("content-type", "application/json")
	json.NewEncoder(w).Encode(board)
}

func main() {

	http.HandleFunc("/", hello)

	http.HandleFunc("/boards", getAll)

	port := ":3005"

	ln, err := net.Listen("tcp", port)
	if err != nil {
		fmt.Println("Port already in use:", err)
		return
	}
	ln.Close()

	fmt.Println("Server start at: http://localhost" + port)

	log.Fatal(http.ListenAndServe(port, nil))

}
