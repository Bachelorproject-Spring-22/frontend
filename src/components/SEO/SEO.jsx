import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description }) {
    return (
        <Helmet
            title={`${title} - The Kahoot! League`}
            htmlAttributes={{ lang: "en" }}
            meta={[
                {
                    name: 'description',
                    content: description,
                }
            ]}
        />
    );
}

export default SEO;