import { json, LoaderArgs } from "@remix-run/node";
import MembershipCard from "~/components/MembershipCard";
import { getMemberships } from "~/models/membership.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { Form, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({ memberships: await getMemberships() });
};

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  console.log({ memberships });
  const user = useUser();

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Form changed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-black">
        Memberships
      </h1>
      <Form method="post" onChange={(event) => handleChange(event)}>
        <ul className="mx-auto max-w-xl p-4">
          {memberships.map(({ level, description, price }) => (
            <MembershipCard
              key={level}
              level={level}
              description={description}
              price={price}
            />
          ))}
        </ul>
      </Form>
    </div>
  );
}
