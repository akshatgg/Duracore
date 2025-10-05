import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const installationSteps = [
  "Site inspection and requirement analysis.",
  "Design and engineering of the solution.",
  "Material procurement and quality check.",
  "On-site delivery and preparation.",
  "Professional installation by certified team.",
  "Final inspection and handover.",
  "Post-installation support and maintenance."
];

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div className="service-details-page">
      <h1>Service Details</h1>
      <h2>{serviceId.replace(/-/g, " ").toUpperCase()}</h2>
      <p>
        At Duracore, we follow a professional and transparent installation process for all our services.
        Here’s what you can expect when you choose us:
      </p>
      <ol className="installation-steps">
        {installationSteps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
      <p>
        For more information or a custom solution, please <a href="/quote">contact our team</a>.
      </p>
    </div>
  );
};

export default ServiceDetails;