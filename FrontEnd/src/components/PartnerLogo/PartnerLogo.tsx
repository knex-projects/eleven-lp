type PartnerLogoProps = {
    src: string;
    alt: string;
};

export default function PartnerLogo({ src, alt }: PartnerLogoProps) {
    return (
        <img
            src={src}
            alt={alt}
            className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
    );
}
