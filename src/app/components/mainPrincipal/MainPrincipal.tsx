import HeaderMenu from "../header-menu/HeaderMenu";
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
                </main>
            </div>
        </>
    )
}