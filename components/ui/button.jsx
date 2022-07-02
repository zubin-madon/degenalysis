import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <button className="border-white border-2 focus:outline-none text-white bg-btn-blue rounded-md px-5 mx-5 hover:bg-purple-900 hover:border-purple-600">
          {props.children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className="border-white border-2 focus:outline-none text-white bg-btn-blue rounded-md px-5 mx-5 hover:bg-purple-900 hover:border-purple-600"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
}

export default Button;
