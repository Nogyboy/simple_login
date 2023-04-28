import { Link } from "react-router-dom";

interface HeaderProps {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl?: string;
}

// Header component for the login and signup pages
export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}: HeaderProps): JSX.Element {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt="Logo"
          className="h-14 w-14"
          src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mb-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
