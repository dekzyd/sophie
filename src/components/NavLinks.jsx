import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "save", text: "save" },
  { id: 2, url: "invest", text: "invest" },
  { id: 3, url: "faq's", text: "FAQs" },
  { id: 4, url: "stories", text: "stories" },
  { id: 5, url: "resources", text: "resources" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            {text == "save" || text == "resources" ? (
              <a className="capitalize" href="#save">
                {text}
              </a>
            ) : (
              <NavLink className="capitalize" to={url}>
                {text}
              </NavLink>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
