import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/frontend.scss',
                'resources/css/backoffice.scss',
                'resources/css/style.css',
                'resources/css/boostrap.min.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
