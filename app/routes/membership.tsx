import { json, LoaderArgs, ActionArgs } from "@remix-run/node";
import MembershipCard from "~/components/MembershipCard";
import invariant from "tiny-invariant";
import {
  getMemberships,
  updateUserMembership,
} from "~/models/membership.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "DuBo Membership Options",
  description: "Discover our varying range of memberships to suit you",
});

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({ memberships: await getMemberships() });
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const membershipId = formData.get("memberships");
  const userId = formData.get("userId");

  invariant(
    typeof membershipId === "string",
    "membershipId must be present and a string value"
  );
  invariant(
    typeof userId === "string",
    "userId must be present and a string value"
  );

  await updateUserMembership({ userId, membershipId });

  return null;
}

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  console.log({ memberships });
  const user = useUser();
  const submit = useSubmit();

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget, { replace: true });
    console.log("Form changed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-black">
        Memberships
      </h1>
      <Form method="post" onChange={(event) => handleChange(event)}>
        <ul className="mx-auto max-w-full p-4">
          {memberships.map(({ id, level, description, price }) => (
            <MembershipCard
              key={id}
              userMembershipId={user.membershipId}
              userId={user.id}
              membershipId={id}
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
