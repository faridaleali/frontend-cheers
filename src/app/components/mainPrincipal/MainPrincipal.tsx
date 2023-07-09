import About from "../about/About";
import Banner from "../banner/header_banner/Banner";
import Footer from "../footer/Footer";
import HeaderMenu from "../header-menu/HeaderMenu";
import BottomMain from "../main/BottomMain";
import Main from "../main/Main";
import YellowBannerMain from "../main/YellowMain";
import ModalRequest from "../modal/ModalRequest";
import ModalSectionBajon from "../modal/ModalSelectBajon";
import ProductsPage from "../products/Products";

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
                    <ProductsPage />
                    <Footer />
                </main>
            </div>
        </>
    )
}