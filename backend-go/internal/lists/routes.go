package lists

import (
	"github.com/go-chi/chi/v5"
)

func RegisterRoutes(r chi.Router) {

	r.Route("/lists", func(r chi.Router) {

		r.Get("/", getAll)

		r.Get("/{id}", getById)

		r.Post("/", create)

		r.Patch("/{id}", update)

		r.Delete("/{id}", delete)

	})
}
