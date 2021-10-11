/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // INFO: fake loader just a hack to avoid the build error with CF Pages
    loader: 'imgix',
    path: '',
  },
};
