/**
 * @type {import('eslint').Linter.Config}
 */
export default {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["!**/.server", "!**/.client", "build", "public/build"],

  // Base config (applies to all files)
  extends: ["eslint:recommended"],

  overrides: [
    // -------------------------------------------------------------------------
    // 1. Typescript & React (Main App Logic)
    //    Consolidates TS and React rules for all component files.
    // -------------------------------------------------------------------------
    {
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "react", "jsx-a11y", "import"],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
        "import/internal-regex": "^~/",
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "./tsconfig.json",
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },

    // -------------------------------------------------------------------------
    // 2. MDX Routes (Blog Posts)
    //    Adds support for Frontmatter and import paths.
    // -------------------------------------------------------------------------
    {
      files: ["**/*.mdx"],
      extends: ["plugin:mdx/recommended"],
      globals: {
        frontmatter: "readonly", // Fixes "frontmatter is not defined"
      },
      settings: {
        "mdx/code-blocks": true,
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "./tsconfig.json",
          },
        },
      },
    },

    // -------------------------------------------------------------------------
    // 3. Config Files (Root Level JS)
    //    Ensures config files (like this one, vite.config, etc) parse correctly.
    // -------------------------------------------------------------------------
    {
      files: ["*.js", "*.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
