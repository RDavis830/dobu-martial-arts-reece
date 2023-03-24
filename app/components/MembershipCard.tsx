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
      className="group mb-4 block rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer hover:bg-blue-400"
    >
      <input type="hidden" name="userId" value={userId} />
      <input
        id={membershipId}
        type="radio"
        name="memberships"
        value={membershipId}
        defaultChecked={userMembershipId === membershipId}
      />
      <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-black group-hover:text-white">
        {level}
      </h2>
      <dl>
        <dt className="bold mb-1 text-xs uppercase text-black group-hover:text-white">
          Description
        </dt>
        <dd className="mb-3 text-black group-hover:text-white">
          {description}
        </dd>
        <dt className="bold mb-1 text-xs uppercase text-black group-hover:text-white">
          Price
        </dt>
        <dd className="mb-3 font-serif text-xl font-extrabold text-black group-hover:text-white">
          {price}
        </dd>
      </dl>
    </label>
  );
}
