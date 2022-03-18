import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description }) {
    return (
        <Helmet
            title={`${title} - uniLeague`}
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