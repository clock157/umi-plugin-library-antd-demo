export default {
  plugins: [
    [
      "umi-plugin-library",
      {
        doc: {
          theme: "docz-theme-antd"
        },
        input: "src/index.js",
        esm: {
          type: "babel",    // rollup babel
        },
        cjs: {
          type: "rollup"  // rollup babel
        },
        umd: {
          name: 'umiPluginLibraryDemo', // default camel case package name
          global: {
            'react': 'React'
          }
        },
        namedExports: {
          [require.resolve("react-is")]: [
            "ForwardRef",
            "isElement",
            "isValidElementType"
          ]
        }
      }
    ]
  ]
};
