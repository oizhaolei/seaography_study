# Bakery Schema

```sql
CREATE USER sea WITH ENCRYPTED PASSWORD 'sea';
GRANT ALL PRIVILEGES ON DATABASE bakery TO sea;
GRANT ALL PRIVILEGES ON SCHEMA public TO sea;

CREATE DATABASE bakeryowner=sea;
\c bakery postgres
GRANT ALL ON SCHEMA public TO sea;
```

Assume the database is named `bakery`:

```sh
export DATABASE_URL=postgres://sea:sea@localhost/bakery
```

# Re-generate entities

```sh
sea-orm-cli generate entity --output-dir src/entity
```

# Running Migrator CLI

- Apply all pending migrations
    ```sh
    cargo run
    ```
    ```sh
    cargo run -- up
    ```
- Apply first 10 pending migrations
    ```sh
    cargo run -- up -n 10
    ```
- Rollback last applied migrations
    ```sh
    cargo run -- down
    ```
- Rollback last 10 applied migrations
    ```sh
    cargo run -- down -n 10
    ```
- Drop all tables from the database, then reapply all migrations
    ```sh
    cargo run -- fresh
    ```
- Rollback all applied migrations, then reapply all migrations
    ```sh
    cargo run -- refresh
    ```
- Rollback all applied migrations
    ```sh
    cargo run -- reset
    ```
- Check the status of all migrations
    ```sh
    cargo run -- status
    ```
