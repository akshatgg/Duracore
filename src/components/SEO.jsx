import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://duracore.in/logo.png",
  ogType = "website"
}) => {
  const siteTitle = title ? `${title} | Duracore` : "Duracore - Pre Engineered Buildings & Prefabricated Structures in India";
  const siteDescription = description || "Leading manufacturer of pre-engineered buildings, prefabricated structures, light gauge steel framing, and sandwich panels. 250+ projects completed across India.";
  const siteKeywords = keywords || "pre engineered buildings, PEB manufacturer, prefabricated structures, steel buildings India, modular construction";
  const canonicalUrl = canonical ? `https://duracore.in${canonical}` : "https://duracore.in/";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={siteKeywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
