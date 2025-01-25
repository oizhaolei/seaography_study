import { useQuery } from "@apollo/client";

import { gql } from "./__generated__/gql";
import { GetCakesDocument, GetCakesQuery } from "./__generated__/graphql";

function DisplayLocations() {
  const { loading, error, data } = useQuery<GetCakesQuery>(GetCakesDocument);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error : {error?.message || "no data"}</p>;

  console.log("data:", data);
  return data.cake.nodes.map(({ id, name, price, glutenFree, bakery }) => (
    <div key={id}>
      <h3>{name}</h3>
      <p>{glutenFree}</p>
      <p>{price}</p>
      <p>{bakery?.name}</p>
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app with codegen 🚀</h2>
      <DisplayLocations />
    </div>
  );
}
