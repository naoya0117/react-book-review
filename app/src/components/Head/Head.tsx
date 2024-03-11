import { Helmet } from 'react-helmet-async';

type HeadProps = {
    title: string;
    description: string;
};

export const Head = ({ title, description }: HeadProps) => {
    return (
        <Helmet
            title={title ? `${title} | book-review` : undefined}
            meta={[
                { name: 'description', content: description },
                { property: 'og:title', content: title },
                { property: 'og:description', content: description },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: '掲示板' },
                { property: 'og:image', content: '' },
            ]}
        ></Helmet>
    );
};
