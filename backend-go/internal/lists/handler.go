package lists

import (
	"backend-go/internal/db"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func getAll(w http.ResponseWriter, r *http.Request) {

	var lists []List

	db.DB.Find(&lists)

	fmt.Println(lists)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(lists)
}

func getById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("get List : " + id))
}

func create(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("post List"))
}

func update(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("patch List : " + id))
}

func delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("delete List : " + id))
}
