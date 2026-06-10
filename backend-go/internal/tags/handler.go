package tags

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func getAll(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("get tags"))
}

func getById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("get tag : " + id))
}

func create(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("post tag"))
}

func update(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("patch tag : " + id))
}

func delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("delete tag : " + id))
}
