import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => { 
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; /* ID for pages will be lower case; replace code = removes gaps from link names (i.e. Our Classes becomes ourclasses since that's the ID for that page) */

    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300
            `}
        >
            {page}
        </AnchorLink>
    )
}

export default Link;