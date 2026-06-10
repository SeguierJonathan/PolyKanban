package cards

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func getAll(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("get cards"))
}

func getById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("get card : " + id))
}

func create(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("post card"))
}

func update(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("patch card : " + id))
}

func delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("delete card : " + id))
}
