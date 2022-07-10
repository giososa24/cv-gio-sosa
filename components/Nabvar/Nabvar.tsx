import styles from "./Nabvar.module.css";
import ActiveLink from "../ActiveLink.tsx/ActiveLink";
import image from "../../assets/images/gio-sosa-logo.png";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Nabvar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <div>
        <Link href="/">
          <a>
            <Image
              width="100%"
              height="40%"
              src={image}
              title="Page not found"
              alt="Page not found"
            />
          </a>
        </Link>
      </div>
      <div>
        {menuItems.map(({ label, href }, i) => (
          <ActiveLink key={`${i}-${href}`} link={label} href={href} />
        ))}
      </div>
    </nav>
  );
};

export default Nabvar;
