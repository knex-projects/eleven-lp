import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import airbnb from 'eslint-config-airbnb';
import airbnbTypescript from 'eslint-config-airbnb-typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: ['dist/'],
    },
    // 1. Configuração para o CÓDIGO-FONTE da aplicação (React/TS)
    {
        files: ['src/**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.app.json',
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser, // Ambiente de navegador
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...airbnb.rules,
            ...airbnbTypescript.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
            'react-refresh/only-export-components': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'import/prefer-default-export': 'off',
        },
    },
    // 2. Configuração para ARQUIVOS DE CONFIGURAÇÃO (Vite/TS)
    {
        files: ['vite.config.ts'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.node.json',
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.node, // Ambiente Node.js
            },
        },
        rules: {
            // Regras mais relaxadas para arquivos de configuração
            'import/no-extraneous-dependencies': 'off',
        },
    },
    // 3. Configuração para arquivos JavaScript (sem checagem de tipo)
    {
        files: ['**/*.{js,cjs}'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            ...airbnb.rules,
            '@typescript-eslint/no-shadow': 'off',
            '@typescript-eslint/dot-notation': 'off',
        },
    },
    // 4. Configuração do Prettier (deve ser a última)
    eslintConfigPrettier
);
