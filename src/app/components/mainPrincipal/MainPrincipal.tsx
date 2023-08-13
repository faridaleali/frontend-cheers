import { CartProvider } from "@/app/helpers/CartProvider";
import About from "../about/About";
import Banner from "../banner/header_banner/Banner";
import Footer from "../footer/Footer";
import HeaderMenu from "../header-menu/HeaderMenu";
import BottomMain from "../main/BottomMain";
import Main from "../main/Main";
import YellowBannerMain from "../main/YellowMain";
import ProductsPage from "../products/Products";
import { ClientDataProvider } from "@/app/helpers/ClientDataContext";

export default function MainPrincipal() {
    return (
        <ClientDataProvider>
            <CartProvider >
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
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </CartProvider>
        </ClientDataProvider>
    )
}