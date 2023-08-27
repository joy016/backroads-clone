'user client';

import Image from 'next/image';
import Styles from './navbar.module.css';
import Link from 'next/link';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaSquarespace } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NAVLINK } from '../../../../constant/navbar';

const Navbar = () => (
  <div className={Styles.container}>
    <div className={Styles.navcontainer}>
      <Image
        src="https://backroads-app.netlify.app/static/media/logo.08d970fd0ddb0af90a9c60fb965e56d2.svg"
        width={175}
        height={30}
        alt={''}
      />

      <ul className={Styles.navlist}>
        {NAVLINK.map(({ title, navLink }) => (
          <li key={title}>
            <Link href={navLink}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className={Styles.iconsContainer}>
        <BsFacebook className={Styles.icon} />
        <BsTwitter className={Styles.icon} />
        <FaSquarespace className={Styles.icon} />
        <GiHamburgerMenu className={Styles.menuIcon} />
      </div>
    </div>
  </div>
);
export default Navbar;
