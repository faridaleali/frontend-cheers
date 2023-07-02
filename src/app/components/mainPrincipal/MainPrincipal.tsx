import About from "../about/About";
import Banner from "../banner/header_banner/Banner";
import HeaderMenu from "../header-menu/HeaderMenu";
import BottomMain from "../main/BottomMain";
import Main from "../main/Main";
import YellowBannerMain from "../main/YellowMain";

export default function MainPrincipal() {
    return (
        <>
            <div className="container__header h-screen flex flex-col">
                <nav>
                    <HeaderMenu />
                </nav>
                <main>
                    <Main />
                    <BottomMain />
                    <YellowBannerMain />
                    <About />
                    <Banner />
                </main>
            </div>
        </>
    )
}