import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorBarclays from "@/assets/SponsorBarclays.png";
import SponsorPepsi from "@/assets/SponsorPepsi.png";
import SponsorPrime from "@/assets/SponsorPrime.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" /* Padding all 10, medium screens height full screen */
  >
    {/* IMAGE AND MAIN HEADER */}
    <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* Headings */}
            <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
                <div className="relative">
                    <div className="before:absolute before:-top-[1rem] before:-right-[-20rem] before:z-[-1] md:before:content-evolvetext before:scale-[2.5] before:opacity-[25%]">
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                </div>

                <p className="mt-8 text-sm">
                    Unrivaled, Unparalleled... The Gold Standard Gym. World Class equipment with World Class trainers.
                </p>
            </motion.div>

            {/* Actions */}
            <motion.div className="mt-8 flex items-center gap-8"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
            >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10
               md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
    </motion.div>

    {/* Sponsors */}
    {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-gradient-to-r from-lg-300 from-13% via-lg-200 via-90% to-lg-100 to-93% py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8">
                    <img alt="barclays-sponsor" src={SponsorBarclays} />
                    <img alt="prime-sponsor" src={SponsorPrime} />
                    <img alt="pepsi-sponsor" src={SponsorPepsi}/>
                </div>
            </div>
        </div>
    )}
  </section>
}

export default Home;