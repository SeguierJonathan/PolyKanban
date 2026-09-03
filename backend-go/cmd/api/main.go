package main

import (
	"backend-go/internal/db"
	"backend-go/internal/boards"
	"backend-go/internal/cards"
	"backend-go/internal/lists"
	"backend-go/internal/tags"
	"os"

	"fmt"
	"log"
	"net"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {

	db.Init()

	r := chi.NewRouter()

	boards.RegisterRoutes(r)
	lists.RegisterRoutes(r)
	cards.RegisterRoutes(r)
	tags.RegisterRoutes(r)

	port := fmt.Sprintf(":%s", os.Getenv("PORTGO"))

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
