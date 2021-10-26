
const withAntdLess = require('next-plugin-antd-less');

const { i18n } = require('./next-i18next.config');

module.exports = withAntdLess({
    // optional
    modifyVars: {
        '@primary-color': '#579ccb', // primary color for all components
        '@link-color': '#579ccb', // link color
        '@success-color': '#4fa975', // success state color
        '@warning-color': '#cd993d', // warning state color
        '@error-color': '#f44336', // error state color
        '@font-size-base': '16px', // major text font size
        '@heading-color': '#3C4858', // heading text color
        '@text-color': '#3C4858', // major text color
        '@text-color-secondary': 'rgba(64, 64, 64, 0.6)', // secondary text color
        '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
        '@border-radius-base': '5px', // major border radius
        '@border-color-base': '#d9d9d9', // major border color
        '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),\n' +
         ' 0 9px 28px 8px rgba(0, 0, 0, 0.05)' // major shadow for layers
    },
    // optional
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},
    i18n,
    async rewrites() {
        return [
            {
                source: '/signup',
                destination: '/user/signup',
            },
            {
                source: '/login',
                destination: '/user/login',
            },
            {
                source: '/reset-password',
                destination: '/user/reset-password',
            },
            {
                source: '/forgot-password',
                destination: '/user/forgot-password',
            },
            {
                source: '/forgot-password-activation',
                destination: '/user/forgot-password-activation',
            },
            {
                source: '/email-activation',
                destination: '/user/email-activation',
            },
        ]
    },
    // Other NextConfig Here...
    webpack(config) {
        return config;
    },
});