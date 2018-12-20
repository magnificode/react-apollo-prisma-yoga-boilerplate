import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/page"><a>Page</a></Link></li>
    </ul>
  </nav>
);

export default Nav;