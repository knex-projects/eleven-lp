type PartnerLogoProps = {
    src: string;
    alt: string;
};

export default function PartnerLogo({ src, alt }: PartnerLogoProps) {
    return <img src={src} alt={alt} />;
}
