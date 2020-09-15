import React from "react";
import { PageContent } from "./Page.styles";
const Page = ({ children }) => {
    return (
        <div>
            <PageContent>{children}</PageContent>
        </div>
    );
};

export default Page;
