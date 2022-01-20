export function dbToCountry(db) {
  return {
    id: db.id,
    name: db.value,
  }
}
