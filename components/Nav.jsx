import Link from 'next/link';

// neext hooks
import {usePathname} from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'my projects'},
    {path: '/contact', name: 'contact'},
];
 
 const Nav = ({containerStyles, linkStyles, underlinesStyles}) => {
    const path=usePathname();
   return (
   <nav className={`${containerStyles}`}>
    {links.map((link, index) => {
        return (
            <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            >
                {link.path === path && (
                    <motion.span 
                    initial={{y: '-100%'}}
                    animate={{y:0}}
                    transition={{ type:'tween'}}
                    layoutId='underline'
                    className={`${underlinesStyles}`}
                    />
                )}
                {link.name}
            </Link>
        );
    })}
   </nav>
   );
 };
 
 export default Nav;
 