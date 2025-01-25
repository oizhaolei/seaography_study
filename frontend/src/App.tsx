import { useQuery } from "@apollo/client";
import { GetCakesDocument, GetCakesQuery } from "./__generated__/graphql";

function DisplayCakes() {
  const { loading, error, data } = useQuery<GetCakesQuery>(GetCakesDocument, {
    variables: { glutenFree: true },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error : {error?.message || "no data"}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gluten Free</th>
          <th>Price</th>
          <th>Bakery</th>
        </tr>
      </thead>
      <tbody>
        {data.cake.nodes.map(({ id, name, price, glutenFree, bakery }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{glutenFree ? "Y" : "N"}</td>
            <td>{price}</td>
            <td>{bakery?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app with codegen 🚀</h2>
      <DisplayCakes />
    </div>
  );
}
