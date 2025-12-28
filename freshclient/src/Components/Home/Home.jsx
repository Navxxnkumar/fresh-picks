import React from "react";
import Herosection from "./Herosection";
import { Homesupport } from "./Homesupport";
import { Homeforyou } from "./Homeforyou";
import { Homeproduct } from "./Homeproduct";
import { Homedeal } from "./Homedeal";
import { Homebrand } from "./Homebrand";

const Home = () => {


    return (
        <>
            <Herosection />
            <Homesupport />
            <Homeforyou />
            <Homeproduct />
            <Homedeal />
            <Homebrand />
        </>
    );
};

export default Home;
