import { Children } from "react";
import { Footer } from "./Footer";

export function MainContent(props) {
    return (
        <div className="main-panel">
            <div className="container">
                <div className="page-inner">
                    {props.children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
