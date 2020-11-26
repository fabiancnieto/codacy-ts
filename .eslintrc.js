const config = {
    parser: "@typescript-eslint/parser",
    plugins: ["prettier", "@typescript-eslint"],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        "@typescript-eslint/indent": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/unbound-method": "off",
        "comma-dangle": ["error", "never"],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": { "multiline": true, "consistent": true },
                "ObjectPattern": { "multiline": true, "consistent": true },
                "ExportDeclaration": { "multiline": true, "consistent": true },
                "ImportDeclaration": { "multiline": true, "consistent": true },
            }
        ],
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"],
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["tsconfig.json"],
        ecmaVersion: 6,
        sourceType: "module",
    },
};

module.exports = config;
