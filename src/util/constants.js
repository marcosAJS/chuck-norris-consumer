export const sortOrder = {
  ASC: "asc",
  DESC: "desc"
};

export const modalScreen = {
  NEW_JOKE: "NEW_JOKE",
  EDIT_JOKE: "EDIT_JOKE",
  VIEW_JOKE: "VIEW_JOKE"
};

export const jokeColumns = [
  { id: "id", label: "ID", sort: true, order: sortOrder.DESC },
  { id: "created_at", label: "Created At", sort: true, order: sortOrder.DESC },
  { id: "value", label: "Value", sort: true, order: sortOrder.ASC }
];
