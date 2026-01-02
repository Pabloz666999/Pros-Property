import React, { Children } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function BaseLayout({children , theme = "light"}) {
    return <div>
        <Header theme={theme}/>
        <div className={`main-content min-h-screen ${ theme === "light" ? "pt-[120px] md:pt-[184px]" : ""}`}>{children}</div>
        <Footer />
    </div>
}