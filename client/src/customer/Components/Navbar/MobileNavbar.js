import { Link } from "react-router-dom";
import React, { useState } from "react";
import Register from "../Auth/Register";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaHeart, FaBox, FaSignOutAlt } from "react-icons/fa";
import { clearUser } from "../../../Redux/User/userSlice";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCatog, setOpenCatog] = useState(null);
  const [subCatog, setsubCatog] = useState(false);

  const menuItems = [
    {
      name: "GROCERY",
      types: [
        { name: "Dals", path: "/grocery/" },
        // { name: 'Dals', path: '/grocery/dals' },
        { name: "Pulses", path: "/grocery/" },
        // { name: 'Pulses', path: '/grocery/pulses' },
        { name: "Dry Fruits", path: "/grocery/dry-fruits" },
        { name: "DMart Grocery", path: "/grocery/dmart-grocery" },
        { name: "Cooking Oil", path: "/grocery/cooking-oil" },
        { name: "Ghee & Vanaspati", path: "/grocery/ghee-vanaspati" },
        { name: "Flours & Grains", path: "/grocery/flours-grains" },
        { name: "Rice & Rice Products", path: "/grocery/rice-products" },
        { name: "Masala & Spices", path: "/grocery/masala-spices" },
        { name: "Salt / Sugar / Jaggery", path: "/grocery/salt-sugar-jaggery" },
      ],
    },
    {
      name: "DAIRY & BEVERAGES",
      types: [
        { name: "Beverages", path: "/dairy-beverages/beverages" },
        { name: "Dairy", path: "/dairy-beverages/dairy" },
      ],
    },
    {
      name: "PACKAGED FOOD",
      types: [
        { name: "Biscuits & Cookies", path: "/packaged-food/biscuits-cookies" },
        { name: "Snacks & Farsans", path: "/packaged-food/snacks-farsans" },
        { name: "Breakfast Cereals", path: "/packaged-food/breakfast-cereals" },
        {
          name: "Chocolates & Candies",
          path: "/packaged-food/chocolates-candies",
        },
        { name: "Ketchup & Sauce", path: "/packaged-food/ketchup-sauce" },
        { name: "Jams & Spreads", path: "/packaged-food/jams-spreads" },
        { name: "Pasta & Noodles", path: "/packaged-food/pasta-noodles" },
        { name: "Ready To Cook", path: "/packaged-food/ready-to-cook" },
        { name: "Sweets", path: "/packaged-food/sweets" },
        { name: "Pickles", path: "/packaged-food/pickles" },
        { name: "Health Food", path: "/packaged-food/health-food" },
        { name: "Soups", path: "/packaged-food/soups" },
        { name: "Mukhwas", path: "/packaged-food/mukhwas" },
        { name: "Bakery", path: "/packaged-food/bakery" },
        { name: "Frozen Foods", path: "/packaged-food/frozen-foods" },
      ],
    },
    {
      name: "BEAUTY & COSMETICS",
      types: [{ name: "Skin", path: "/beauty-cosmetics/skin" }],
    },
    {
      name: "BABY & KIDS",
      types: [
        { name: "Diapering", path: "/baby-kids/diapering" },
        { name: "Baby Care", path: "/baby-kids/baby-care" },
      ],
    },
    {
      name: "APPLIANCES",
      types: [{ name: "Home Appliances", path: "/appliances/home-appliances" }],
    },
    {
      name: "PERSONAL CARE",
      types: [
        { name: "Skin Care", path: "/personal-care/skin-care" },
        { name: "Face Care", path: "/personal-care/face-care" },
        { name: "Hair Care", path: "/personal-care/hair-care" },
        { name: "Lip Care", path: "/personal-care/lip-care" },
        { name: "Oral Care", path: "/personal-care/oral-care" },
        { name: "Sanitary Napkins", path: "/personal-care/sanitary-napkins" },
        { name: "Deos & Perfumes", path: "/personal-care/deos-perfumes" },
        { name: "Shaving Needs", path: "/personal-care/shaving-needs" },
        { name: "Baby Care", path: "/personal-care/baby-care" },
        { name: "Diapering", path: "/personal-care/diapering" },
        { name: "Health & Wellness", path: "/personal-care/health-wellness" },
        { name: "Personal Hygiene", path: "/personal-care/personal-hygiene" },
      ],
    },
    {
      name: "SPECIALS",
      types: [
        { name: "Value Packs", path: "/specials/value-packs" },
        { name: "Discover More", path: "/specials/discover-more" },
      ],
    },
    {
      name: "FRUITS & VEGETABLES",
      types: [
        {
          name: "Frozen Vegetable",
          path: "/fruits-vegetables/frozen-vegetable",
        },
      ],
    },
    {
      name: "HOME & KITCHEN",
      types: [
        {
          name: "Detergent & Fabric Care",
          path: "/home-kitchen/detergent-fabric-care",
        },
        { name: "Cleaners", path: "/home-kitchen/cleaners" },
        { name: "Utensil Cleaners", path: "/home-kitchen/utensil-cleaners" },
        {
          name: "Freshener & Repellents",
          path: "/home-kitchen/freshener-repellents",
        },
        { name: "Disinfectants", path: "/home-kitchen/disinfectants" },
        {
          name: "Tissue Paper & Napkins",
          path: "/home-kitchen/tissue-paper-napkins",
        },
        { name: "Pooja Needs", path: "/home-kitchen/pooja-needs" },
        { name: "Home Utility", path: "/home-kitchen/home-utility" },
      ],
    },
    {
      name: "HOME UTILITY & ORGANISERS",
      types: [
        {
          name: "Cleaning / Tools / Kits",
          path: "/home-utility-organisers/cleaning-tools-kits",
        },
      ],
    },
    {
      name: "SCHOOL SUPPLIES",
      types: [
        { name: "Stationery Sets", path: "/school-supplies/stationery-sets" },
      ],
    },
    {
      name: "FOOTWEAR",
      types: [{ name: "Shoe Care", path: "/footwear/shoe-care" }],
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");

  const authToken = localStorage.getItem("authToken");
  const isAuthenticated = !!authToken;

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return; // Check if the search field is empty
    navigate(`/search/${search}`);
  };

  const showCart = () => {
    navigate("/cart");
  };

  const handleProfileClick = () => {
    if (localStorage.getItem("role") === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/myprofile/profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(clearUser());
    navigate("/");
  };

  const handleMouseEnter = (event) => {
    if (isAuthenticated) {
      const { top, left, height } = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({ top: top + height, left });
      setHoverDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (isAuthenticated) {
      setHoverDropdown(false);
    }
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-1 items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex gap-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="transition-all h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
            <Link to={"/"} className="capitalize">
              {" "}
              <img
                src="./apala bazar.png"
                alt="Logo"
                className="h-10"
                crossOrigin="anonymous"
              />
            </Link>
          </div>
          <div className="flex space-x-12">
            <div className="relative">
              {isAuthenticated ? (
                <div className="flex gap-2">
                  <div className="flex items-center space-x-2">
                    <button onClick={showCart}>
                      <svg
                        className="w-6 h-6 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h18l-1.68 9.39a2 2 0 01-1.98 1.61H6.66a2 2 0 01-1.98-1.61L3 3zm0 0l1.68 9.39a2 2 001.98 1.61h10.68a2 2 001.98-1.61L21 3M5 21h14"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className="flex items-center space-x-2 rounded-md p-2 border-[1px] bg-blue-500 hover:bg-blue-600"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      className="w-6 h-6 text-zinc-700 border-zinc-700 border-[2px] bg-white rounded-xl"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <button
                      onClick={handleProfileClick}
                      className="text-white font-medium flex items-center"
                    >
                      Profile
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="flex items-center space-x-2 rounded-md p-2 border-[1px] bg-blue-500 hover:bg-blue-600"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-white font-medium"
                  >
                    {" "}
                    <svg
                      className="w-6 h-6 text-zinc-700 border-zinc-700 border-[2px] bg-white rounded-xl"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    Sign In / Register
                  </button>
                </div>
              )}
              <Register showModal={showModal} setShowModal={setShowModal} />

              {hoverDropdown && (
                <div
                  className="fixed bg-white shadow-lg space-y-2 w-fit border-[1px] border-gray-200 rounded-md z-[1000]"
                  style={{
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                  }}
                  onMouseEnter={() => setHoverDropdown(true)}
                  onMouseLeave={() => setHoverDropdown(false)}
                >
                  <button
                    onClick={() => navigate("/myprofile/profile")}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaUser className="mr-2" />
                    My Profile
                  </button>
                  <button
                    onClick={() => navigate("/myprofile/likes")}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaHeart className="mr-2" />
                    Wishlist
                  </button>
                  <button
                    onClick={() => navigate("/myprofile/orders")}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaBox className="mr-2" />
                    Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:w-[40%] w-[100%] lg:mx-5 p-3">
        <input
          type="search"
          placeholder="Search for Biscuits"
          className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-full dark:bg-white dark:text-black"
          onChange={(e) => setSearch(e.target.value)}
          required
          value={search}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-r-lg font-sans"
        >
          SEARCH
        </button>
      </div>

      {isOpen && (
        <div
          className={`px-2  pt-2 absolute z-10 bg-white/70 min-h-screen border backdrop-blur-lg pb-4 transition-all ${
            isOpen ? "-translate-x-0" : "-translate-x-96"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="transition-all block px-2 py-3 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => {
                setOpenCatog(item.name);
                setsubCatog(!subCatog);
              }}
            >
              {subCatog ? (
                openCatog === item.name ? (
                  <div className="transition-all flex justify-between font-bold">
                    {item.name}
                    <DownArrow />
                  </div>
                ) : (
                  <div className="flex justify-between font-bold">
                    {item.name}
                    <RightArrow />
                  </div>
                )
              ) : (
                <div className="flex justify-between font-bold">
                  {item.name}
                  <RightArrow />
                </div>
              )}
              {subCatog &&
                item.types.map((cato) => {
                  if (item.name === openCatog) {
                    return (
                      <Link
                        className="transition-all flex  mb-3 ml-3"
                        to={cato.path}
                      >
                        {cato.name}
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

function DownArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-shopping-bag"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
export default Navbar;
