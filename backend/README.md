# SeaORM + Seaography Example

| ![](https://raw.githubusercontent.com/SeaQL/sea-orm/master/examples/seaography_example/Seaography%20example.png) |
|:--:| 
| Seaography screenshot with Bakery schema |

| ![](https://raw.githubusercontent.com/SeaQL/sea-orm/master/tests/common/bakery_chain/bakery_chain_erd.png) |
|:--:| 
| The Bakery schema |

## Specify a database url

```
export DATABASE_URL=postgres://sea:sea@localhost/bakery
```

## Setup the Database

Cd into `migration` folder and follow instructions there, but basically:

```sh
cargo run
```

## Install Seaography

```sh
cargo install seaography-cli@^1.1.3
```

## Generate GraphQL project

```sh
rm -rf graphql # ONLY IF this entire folder is generated
sea-orm-cli generate entity --output-dir graphql/src/entities --seaography
# with `axum` framework
seaography-cli -f axum graphql graphql/src/entities $DATABASE_URL sea-orm-seaography-example
```
# add `cors` configuration to `main.rs`

## graphql/Cargo.toml
``` diff
 tokio = { version = "1.29.1", features = ["macros", "rt-multi-thread"] }
 tracing = { version = "0.1.37" }
 tracing-subscriber = { version = "0.3.17" }
+tower = { version = "0.4.13", features = ["util"] }
+tower-http = { version = "0.5.2", features = ["full"] }
 
 [dependencies.seaography]
 version = "~1.1.3" # seaography version
```

## graphql/src/main.rs

``` diff
 use seaography::{async_graphql, lazy_static};
 use std::env;
 use tokio::net::TcpListener;
+use tower_http::cors::{Any, CorsLayer};
 
 lazy_static::lazy_static! {
     static ref URL : String = env :: var ("URL") . unwrap_or ("localhost:8000" . into ()) ;
@@ -25,7 +24,7 @@ async fn graphiql() -> impl IntoResponse {
 }
 
 #[tokio::main]
+async fn main() -> Result<(), Box<dyn std::error::Error>> {
-async fn main() {
     dotenv().ok();
     tracing_subscriber::fmt()
         .with_max_level(tracing::Level::INFO)
@@ -37,9 +36,23 @@ async fn main() -> Result<(), Box<dyn std::error::Error>> {
     let schema =
         sea_orm_seaography_example::query_root::schema(database, *DEPTH_LIMIT, *COMPLEXITY_LIMIT)
             .unwrap();
+
+    let allow_origins = [
+        "http://localhost:5173".parse()?, // for vite frontend
+    ];
+
+    let app = Router::new()
+        .route("/", get(graphiql).post_service(GraphQL::new(schema)))
+        .layer(
+            CorsLayer::new()
+                .allow_origin(allow_origins)
+                .allow_headers(Any)
+                .allow_methods(Any),
+        );
-    let app = Router::new().route("/", get(graphiql).post_service(GraphQL::new(schema)));
     println!("Visit GraphQL Playground at http://{}", *URL);
     axum::serve(TcpListener::bind(&*URL).await.unwrap(), app)
         .await
         .unwrap();
+
+    Ok(())
 }
```

## Running the project

```sh
cd graphql
cargo run
```

## Run some queries

### Bakery -> Cake -> Baker

```graphql
{
  bakery(pagination: { page: { limit: 10, page: 0 } }, orderBy: { name: ASC }) {
    nodes {
      name
      cake {
        nodes {
          name
          price
          baker {
            nodes {
              name
            }
          }
        }
      }
    }
  }
}
```

### List gluten-free cakes and know where to buy them

```graphql
{
  cake(filters: { glutenFree: { eq: 1 } }) {
    nodes {
      name
      price
      glutenFree
      bakery {
        name
      }
    }
  }
}
```
