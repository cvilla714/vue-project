# Vue.js Product Dashboard

A product management dashboard built with Ruby on Rails backend and Vue.js frontend.

![Product Dashboard Screenshot](https://picsum.photos/seed/1/800/400)

## Features

- **Vue.js Frontend**: Responsive 3-column grid layout for product display
- **Rails API Backend**: RESTful API endpoints for product operations
- **TailwindCSS**: Modern and responsive styling
- **Soft Deletion**: Products are soft-deleted using the Discard gem
- **Redis Caching**: Improved performance with Redis-based caching

## Technology Stack

- **Backend**: Ruby on Rails 7.2.2
- **Frontend**: Vue.js 3.3.4
- **Database**: PostgreSQL
- **Styling**: TailwindCSS 4.x
- **Caching**: Redis
- **JavaScript Bundler**: esbuild

## Prerequisites

- Ruby 3.2.3+
- Node.js 18+
- PostgreSQL
- Redis

## Installation

### Clone the repository

```bash
git clone https://github.com/cvilla714/vue-project.git
cd vue-project
```

### Install dependencies

```bash
# Install Ruby gems
bundle install

# Install JavaScript dependencies
npm install
```

### Database setup

```bash
# Create and migrate database
rails db:create db:migrate

# Seed sample data
rails db:seed
```

### Start the development server

```bash
# Start the Rails server, TailwindCSS watcher, and esbuild watcher
bin/dev
```

Visit `http://localhost:3000` to view the application.

## API Endpoints

- **GET /api/v1/products**: Fetch all products
- **DELETE /api/v1/products/:id**: Soft delete a product

## Development

The application uses:

- esbuild for JavaScript bundling (configured in `esbuild.config.js`)
- Vue.js single-file components (located in `app/javascript/components`)
- TailwindCSS for styling

## Project Structure

```
app/
├── controllers/
│   └── api/
│       └── v1/
│           └── products_controller.rb  # API controller
├── javascript/
│   ├── application.js                  # Main JS entry point
│   └── components/
│       └── ProductList.vue             # Vue product grid component
└── views/
    └── home/
        └── index.html.erb              # Vue app mounting point
```

## Troubleshooting

### White Screen / Blank Page

If you see a blank page:

1. Check browser console for errors
2. Verify the Vue.js app is mounting correctly
3. Ensure API endpoints are returning data
4. Check ERB comment syntax in application.html.erb

### Asset Compilation Issues

If you encounter asset compilation issues:

1. Ensure manifest.js includes all required assets
2. Check esbuild.config.js configuration
3. Verify Vue.js dependencies are correctly installed

## License

MIT
