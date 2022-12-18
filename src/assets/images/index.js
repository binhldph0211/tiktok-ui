const images = {
    // Với .svg thì cần phải có .default
    logo: require('~/assets/images/logo.svg').default,

    // Với .png thì không cần phải có .default vì webpack nó xử khác
    noImage: require('~/assets/images/no-image.png'),
};

export default images;
