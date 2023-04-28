interface MembershipCardProps {
  membershipId: string;
  userMembershipId: string | null;
  userId: string;
  level: string;
  description: string;
  price: string;
}

export default function MembershipCard({
  membershipId,
  userMembershipId,
  userId,
  level,
  description,
  price,
}: MembershipCardProps) {
  return (
    <label
      htmlFor={membershipId}
      className="group mb-4 block rounded-lg bg-white p-8 text-center shadow-lg ring-2 ring-blue-500 transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer hover:bg-blue-400 hover:ring-white"
    >
      <input type="hidden" name="userId" value={userId} />
      <input
        id={membershipId}
        type="radio"
        name="memberships"
        value={membershipId}
        defaultChecked={userMembershipId === membershipId}
      />
      <h2 className="mb-4 font-mono text-2xl tracking-wide text-black group-hover:text-white">
        {level}
      </h2>
      <dl>
        <dt className="bold mb-1 font-mono text-xs font-extrabold uppercase text-black group-hover:font-normal group-hover:text-white">
          Description
        </dt>
        <dd className="mb-3 font-mono text-black group-hover:font-extrabold group-hover:text-white">
          {description}
        </dd>
        <dt className="bold mb-1 font-mono text-xs font-extrabold uppercase text-black group-hover:font-normal group-hover:text-white">
          Price
        </dt>
        <dd className="mb-3 font-mono text-xl text-black group-hover:font-extrabold group-hover:text-white">
          {price}
        </dd>
      </dl>
    </label>
  );
}
