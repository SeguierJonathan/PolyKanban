package lists

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func getAll(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("get boards"))
}

func getById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("get board : " + id))
}

func create(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("post board"))
}

func update(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("patch board : " + id))
}

func delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Write([]byte("delete board : " + id))
}
