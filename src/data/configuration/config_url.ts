
/* Static URLs */

/* returns list of ticket types */
export const ticketTypesURL = '/api/ticketTypes';

/* returns list of movies */
export const moviesURL = '/api/movies';

/* returns list of movies ordered by category */
export const moviesByCategoryURL = '/api/movies_by_category';

/* returns a list of screenings */
export const screeningsURL = '/api/screenings';

export const occupiedSeatsURL = '/api/occupied_seats';

export const seatsPerAuditoriumURL = '/api/seats_per_auditorium';

export const auditoriumsURL = '/api/auditoriums';

export const categoriesURL = '/api/categories';

/* returns the logged in user if one exists. */
export const loginURL = '/api/login';

/* get all records from a table or view. */
export const tableURL = '/api/table';

/* write an id after the table name and /. to retrieve a record with a specific id. 
  (Works for those tables and views that have id column.) */
export const tableByIdURL = (id: number) => `/api/table/${id}`;