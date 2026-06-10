package main

import (
	"backend-go/internal/routes/boards"
	"backend-go/internal/routes/cards"
	"backend-go/internal/routes/lists"
	"backend-go/internal/routes/tags"

	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"

	"github.com/go-chi/chi/v5"
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

	r := chi.NewRouter()

	boards.RegisterRoutes(r)
	lists.RegisterRoutes(r)
	cards.RegisterRoutes(r)
	tags.RegisterRoutes(r)

	port := ":3005"

	//test port already use
	ln, err := net.Listen("tcp", port)
	if err != nil {
		fmt.Println("Port already in use:", err)
		return
	}
	ln.Close()

	fmt.Println("Server start at: http://localhost" + port)

	log.Fatal(http.ListenAndServe(port, r))

}
