export default function LazyImage({ src, alt="", className }) {
    return (
        <img
            data-src={src}
            alt={alt}
            className={`${className} _lazy_img`}
            loading="lazy"
        />
    );
}