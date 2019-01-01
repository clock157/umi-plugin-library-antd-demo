export default {
  plugins: [
    [
      "umi-plugin-library",
      {
        doc: {
          theme: "docz-theme-antd"
        },
        input: "components/index.js",
        esm: {
          type: "babel",
          dir: "esm" // not support yet
        },
        cjs: {
          type: "rollup"
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
