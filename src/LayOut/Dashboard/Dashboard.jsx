import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../../Shared/Logo/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { RiPagesLine, RiRemixiconFill } from "react-icons/ri";
import { FaChartArea, FaFileAlt, FaWpforms } from "react-icons/fa";
import { LuKanbanSquareDashed } from "react-icons/lu";
import { TfiWidget } from "react-icons/tfi";
import { CiMap, CiViewTable } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";



const Dashboard = () => {
    return (
        <div className="flex min-h-screen mx-auto ">
            <div className="w-48 md:w-64 min-h-screen  bg-[#F0F0F5]">
                <div className="p-4">
                    <Logo></Logo>
                </div>
                <ul>
                    {/* filemanager  */}
                    <li>

                        <div >
                            <NavLink className=" " to="/fileManager">
                                <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-2 px-4 text-sm font-semibold transition flex items-center gap-3 w-full hover:text-white ">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <FaFileAlt />

                                        </div>
                                        <div>
                                            File Manager
                                        </div>
                                    </div>
                                </button>
                            </NavLink>
                        </div>

                    </li>

                    {/* Page  */}

                    <li>
                        <NavLink className=" " to="/page">
                            <div className="dropdown">
                                <div>
                                    <div tabIndex={0} role="button"
                                        className="disabled:cursor-not-allowed cursor-pointer hover:bg-black collapse-title  font-medium hover:text-white  m-1">
                                        <div className="flex text-center gap-3">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div>

                                                        <RiPagesLine />
                                                    </div>
                                                    <div>
                                                        page
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <IoIosArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </NavLink>
                    </li>
                    {/* UI Elements  */}

                    <li>
                        <NavLink className=" " to="/uiElements">
                            <button className="hover:text-white disabled:cursor-not-allowed cursor-pointer hover:bg-black py-2 px-4 text-sm font-semibold transition flex items-center gap-3 w-full ">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <LuKanbanSquareDashed />
                                        </div>
                                        <div>
                                            UI Elements
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </NavLink>
                    </li>
                    {/* Widgets */}
                    <li>
                        <NavLink className=" " to="/widgets">
                            <button className="hover:text-white disabled:cursor-not-allowed cursor-pointer hover:bg-black py-2 px-4 text-sm font-semibold transition flex items-center gap-3 w-full ">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <TfiWidget />
                                        </div>
                                        <div>
                                            Widgets
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </NavLink>
                    </li>
                    {/* Icons  */}
                    <li>
                        <NavLink className=" " to="/icons">
                            <div className="dropdown">
                                <div>
                                    <div tabIndex={0} role="button"
                                        className="disabled:cursor-not-allowed cursor-pointer hover:bg-black collapse-title  font-medium hover:text-white  m-1">
                                        <div className="flex text-center gap-3">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <RiRemixiconFill />
                                                    </div>
                                                    <div>
                                                        Icons
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <IoIosArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </NavLink>
                    </li>
                    {/* Forms  */}
                    <li>
                        <NavLink className=" " to="/forms">
                            <div className="dropdown w-44">
                                <div>
                                    <div tabIndex={0} role="button"
                                        className="disabled:cursor-not-allowed cursor-pointer hover:bg-black collapse-title  font-medium hover:text-white w-full m-1">
                                        <div className="flex text-center gap-3">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <FaWpforms />
                                                    </div>
                                                    <div>
                                                        Forms
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <IoIosArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  ">

                                    <NavLink to="/basicElements">
                                        <li><a>Basic Elements</a></li>
                                    </NavLink>
                                    <li><a>Advanced</a></li>
                                    <NavLink to="/validation">
                                         <li><a>Validation</a></li>
                                    </NavLink>
                                    
                                    <li><a>wizard</a></li>
                                    <li><a>Editors</a></li>
                                    <li><a>File Uploads</a></li>
                                </ul>
                            </div>
                        </NavLink>
                    </li>

                    {/* Charts  */}
                    <li>
                        <NavLink className=" " to="/charts">
                            <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-2 px-4 text-sm font-semibold transition flex items-center gap-3 w-full hover:text-white">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <FaChartArea />
                                        </div>
                                        <div>
                                            Charts
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </NavLink>
                    </li>
                    {/* Tables  */}
                    <li>
                        <NavLink className=" " to="/tables">
                            <div className="dropdown w-44">
                                <div>
                                    <div tabIndex={0} role="button"
                                        className="disabled:cursor-not-allowed cursor-pointer hover:bg-black collapse-title  font-medium hover:text-white w-full m-1">
                                        <div className="flex text-center gap-3">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <CiViewTable />
                                                    </div>
                                                    <div>
                                                        Tables
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-1">
                                                <IoIosArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  ">
                                    <li><a>Basic table</a></li>
                                    <NavLink to="/advancedTable">
                                        <li><a>Advanced Tables</a></li>
                                    </NavLink>

                                </ul>
                            </div>
                        </NavLink>
                    </li>
                    {/* Maps  */}
                    <li>
                        <NavLink className=" " to="/maps">
                            <div tabIndex={0} className="collapse collapse-arrow  ">
                                <div className="hover:text-white disabled:cursor-not-allowed cursor-pointer hover:bg-black collapse-title  font-medium">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <CiMap />
                                        </div>
                                        <div>
                                            Maps
                                        </div>
                                    </div>

                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    {/* Menu Levels  */}
                    <li>
                        <NavLink to="/menuLevels">
                            <div className="dropdown">
                                <div>
                                    <div tabIndex={0} role="button"
                                        className="disabled:cursor-not-allowed cursor-pointer hover:bg-black collapse-title  font-medium hover:text-white  m-1">
                                        <div className="flex text-center gap-3">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <MdOutlineMenuOpen />
                                                    </div>
                                                    <div>
                                                        Menu Levels
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="pt-1">
                                                <IoIosArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* dashboard content  */}
            <div className="grid p-8 ">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;