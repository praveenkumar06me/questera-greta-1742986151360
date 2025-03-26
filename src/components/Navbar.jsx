import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaCoffee className="text-cafe-brown text-2xl" />
              <span className="font-playfair text-xl text-coffee">Café Delight</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-lato text-coffee hover:text-cafe-brown">Home</Link>
            <Link to="/menu" className="font-lato text-coffee hover:text-cafe-brown">Menu</Link>
            <Link to="/origins" className="font-lato text-coffee hover:text-cafe-brown">Origins</Link>
            <Link to="/reservations" className="font-lato text-coffee hover:text-cafe-brown">Reservations</Link>
            <Link to="/loyalty" className="font-lato text-coffee hover:text-cafe-brown">Rewards</Link>
            <Link to="/about" className="font-lato text-coffee hover:text-cafe-brown">About</Link>
            <Link to="/contact" className="font-lato text-coffee hover:text-cafe-brown">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}