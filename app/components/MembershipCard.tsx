interface MembershipCardProps {
  level: string;
  description: string;
  price: string;
}

export default function MembershipCard({
  level,
  description,
  price,
}: MembershipCardProps) {
  return (
    <li className="group mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer hover:bg-blue-400">
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
    </li>
  );
}
