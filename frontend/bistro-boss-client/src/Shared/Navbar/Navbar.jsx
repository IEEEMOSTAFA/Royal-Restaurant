// // import royalLogo from "assets/royal_restaurant.png";
// import royalLogo from "../../assets/royal_restaurant.png";  
// const Navbar = () => {
//   // Mock states for UI demonstration
//   const isLoggedIn = false;
//   const userEmail = "user@example.com";

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "Contact", href: "#contact" },
//     { label: "Dashboard", href: "#dashboard" },
//     { label: "Our Menu", href: "#menu" },
//     { label: "Our Shop", href: "#shop" },
//   ];

//   return (
//     <nav className="w-full border-b bg-base-100/95 backdrop-blur sticky top-0 z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between gap-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img 
//               src={royalLogo} 
//               alt="Royal Restaurant Logo" 
//               className="h-14 w-14 sm:h-16 sm:w-16 object-contain hover:scale-105 transition-transform duration-300"
//             />
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden lg:flex items-center gap-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="btn btn-ghost btn-sm"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Right Section: Auth Button */}
//           <div className="flex items-center gap-3">
//             <button 
//               className={`btn btn-sm ${isLoggedIn ? 'btn-outline' : 'btn-primary'} hidden sm:flex`}
//             >
//               {isLoggedIn ? "Sign Out" : "Sign In"}
//             </button>

//             {/* Mobile menu button */}
//             <button className="btn btn-ghost btn-circle lg:hidden">
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import royalLogo from "../../assets/royal_restaurant.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Mock states for UI demonstration
  const isLoggedIn = false;
  const userEmail = "user@example.com";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Our Menu", href: "/menu" },
    { label: "Our Shop", href: "/shop" },
  ];

  return (
    <nav className="w-full  bg-opacity-15 border-b bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={royalLogo} 
              alt="Royal Restaurant Logo" 
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain hover:scale-105 transition-transform duration-300 rounded-full shadow-lg"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
           

            {
                navLinks.map((link) =>(
                    <Link
                    key={link.label}
                    to={link.href}
                    className="btn btn-ghost btn-sm hover:bg-purple-100 hover:text-purple-700 transition-colors"
                    >
                    {link.label}
                    </Link>
                ))
            }
          </div>

          {/* Right Section: Auth Button */}
          <div className="flex items-center gap-3">
            <button 
              className={`btn btn-sm ${
                isLoggedIn 
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              } hidden sm:flex transition-colors duration-300`}
            >
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </button>

            {/* Mobile menu button */}
            <button className="btn btn-ghost btn-circle lg:hidden hover:bg-purple-100">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Menu Dropdown (hidden by default) */}
            <div className="hidden absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
              <div className="px-4 py-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;