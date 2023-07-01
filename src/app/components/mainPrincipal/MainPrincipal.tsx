import HeaderMenu from "../header-menu/HeaderMenu";
import BottomMain from "../main/BottomMain";
import Main from "../main/Main";

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
                </main>
            </div>
        </>
    )
}