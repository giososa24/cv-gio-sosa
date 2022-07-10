import Link from "next/link";
import React, { FC } from "react";
import ActiveLinkProps from "./ActiveLink.types";
import styles from "./ActiveLink.module.css"
import { useRouter } from "next/router";

const ActiveLink: FC<ActiveLinkProps> = ({ link, href }) => {
    const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a className={ asPath === href ? styles['link-active'] : styles.link}>{link}</a>
    </Link>
  );
};

export default ActiveLink;
