import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', // This is your primary CSS entry point
                'resources/js/app.js', // This is your primary JS entry point
            ],
            refresh: true,
        }),
    ],
});
