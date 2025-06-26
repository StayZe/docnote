module.exports = {
  project: {
    url: 'http://localhost:8055'
  },
  database: {
    client: 'pg',
    connection: {
      host: 'db',
      port: 5432,
      database: 'directus',
      user: 'directus',
      password: 'directus'
    }
  },
  admin: {
    email: 'admin@example.com',
    password: 'admin'
  }
};
