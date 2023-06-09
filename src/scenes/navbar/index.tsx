import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-gray-20 drop-shadow";

  return (
    <nav>
        <div
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} /* FULL NAVBAR SECTION WIDTH*/
        >
            <div
                className={`${flexBetween} mx-auto w-5/6`} /* FULL NAVBAR CONTAINER WIDTH */
            >
                <div
                    className={`${flexBetween} w-full gap-16`} /* NAVBAR WIDTH */
                >

                    <img alt="logo" src={Logo}/> {/* Left Side of Navbar */}

                    {isAboveMediumScreens ? ( /* Everything below this renders if screen is larger than isAboveMediumScreens query */
                    <div className={`${flexBetween} w-full`}> {/* Right Side of Navbar */}
                        <div className={`${flexBetween} gap-8 text-sm`}> {/* Inner left of right side of navbar - links */}
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className={`${flexBetween} gap-8`}> {/* Inner right of right side of navbar - Sign In + Become Member */}
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton >
                        </div>
                    </div>)
                    : ( /* Everything below this renders if screen is smaller than isAboveMediumScreens query */
                        <button className="rounded-full bg-lg-200 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}

                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-lg-200 drop-shadow-xl">
                {/*CLOSE ICON*/}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl"> 
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar