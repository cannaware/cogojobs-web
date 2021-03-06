/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

const DEFAULT_QUALITY = 75;
const CF_IMAGES_WORKER_URL = '/images';
const SITE_URL = 'https://cogojobs.com';

function cloudflareImageLoader({ src, width, quality = DEFAULT_QUALITY }: ImageLoaderProps) {
  return `${CF_IMAGES_WORKER_URL}?width=${width}&quality=${quality}&image=${SITE_URL}/${src}`;
}

function Img(props: ImageProps) {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} {...props} />;
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />;
  }
}

export default Img;
