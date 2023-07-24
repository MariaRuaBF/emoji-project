interface ImgProps {
  alt?: string;
  height?: string | number;
  loading?: "eager" | "lazy";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  sizes?: string;
  src?: string;
  srcSet?: string;
  useMap?: string;
  width?: string | number;
  onAbort?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const Img: React.FC<ImgProps> = ({
  alt,
  height,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  width,
  onAbort,
  onError,
  onLoad,
}) => {
  return (
    <img
      alt={alt}
      height={height}
      loading={loading}
      referrerPolicy={referrerPolicy}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
      useMap={useMap}
      width={width}
      onAbort={onAbort}
      onError={onError}
      onLoad={onLoad}
    />
  );
};

export default Img;
