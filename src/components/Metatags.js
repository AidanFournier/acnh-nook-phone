import React from "react"
import Helmet from "react-helmet";

export default function Metatags() {
    return (
        <div>
            <Helmet>
            {/* <!-- HTML Meta Tags --> */}
                <title>NookPhone</title>
                <meta 
                    name="description" content="Animal Crossing: New Horizons villager wiki. Search villagers by name to discover their pictures, personal info, and house appearance."
                />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content="NookPhone" />
                <meta 
                    itemprop="description" content="Animal Crossing: New Horizons villager wiki. Search villagers by name to discover their pictures, personal info, and house appearance."
                />
                <meta 
                    itemprop="image" content="https://res.cloudinary.com/diyvlobep/image/upload/v1661869828/Screen_Shot_2022-08-30_at_11.29.48_PM_a5tn6o.png"
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://acnh-nookphone.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="NookPhone" />
                <meta 
                    property="og:description" content="Animal Crossing: New Horizons villager wiki. Search villagers by name to discover their pictures, personal info, and house appearance." 
                />
                <meta 
                    property="og:image" content="https://res.cloudinary.com/diyvlobep/image/upload/v1661869828/Screen_Shot_2022-08-30_at_11.29.48_PM_a5tn6o.png"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="NookPhone"/>
                <meta 
                    name="twitter:description" content="Animal Crossing: New Horizons villager wiki. Search villagers by name to discover their pictures, personal info, and house appearance." 
                />
                <meta 
                    name="twitter:image" content="https://res.cloudinary.com/diyvlobep/image/upload/v1661869828/Screen_Shot_2022-08-30_at_11.29.48_PM_a5tn6o.png" 
                />
            </Helmet>
        </div>
    );
}