# Chicago Grocery Store Bar Crawl

A modern FastAPI web application for [chicagogrocerystorebarcrawl.com](https://chicagogrocerystorebarcrawl.com) - showcasing unique bar crawl experiences through Chicago's local markets and craft beverage establishments.

## 🌟 Features

- **FastAPI Backend**: Modern, fast Python web framework with automatic API documentation
- **Jinja2 Templates**: Server-side rendering with dynamic content
- **Modern Design**: Clean, responsive layout with beautiful gradients and animations
- **Mobile-First**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **API Endpoints**: RESTful API for routes and gallery data
- **Form Handling**: Server-side form validation and processing
- **Database Ready**: Easy to extend with database integration

## 🛠️ Technologies Used

- **FastAPI**: Modern Python web framework
- **Uvicorn**: ASGI server for production deployment
- **Jinja2**: Template engine for dynamic HTML generation
- **Pydantic**: Data validation and settings management
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Google Fonts**: Inter font family for clean typography

## 📁 File Structure

```
chicagogrocerystorebarcrawl/
├── main.py                 # FastAPI application
├── requirements.txt        # Python dependencies
├── static/                 # Static files
│   ├── styles.css         # CSS styles
│   ├── script.js          # JavaScript functionality
│   └── favicon.ico        # Website favicon
├── templates/             # Jinja2 templates
│   ├── base.html          # Base template
│   ├── index.html         # Home page
│   ├── routes.html        # Routes page
│   ├── about.html         # About page
│   └── contact.html       # Contact page
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip (Python package installer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chicagogrocerystorebarcrawl.git
   cd chicagogrocerystorebarcrawl
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```bash
   python main.py
   ```

4. Open your browser and visit `http://localhost:8000`

### Alternative: Using Uvicorn directly
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## 🌐 API Endpoints

The application includes several API endpoints:

- `GET /` - Home page
- `GET /routes` - Routes page
- `GET /about` - About page
- `GET /contact` - Contact page
- `POST /contact` - Submit contact form
- `GET /api/routes` - Get all routes (JSON)
- `GET /api/routes/{route_id}` - Get specific route (JSON)
- `GET /api/gallery` - Get gallery items (JSON)
- `GET /health` - Health check endpoint
- `GET /docs` - Interactive API documentation (Swagger UI)

## 🚀 Deployment Options

### Option 1: Railway (Recommended)
1. Connect your GitHub repository to Railway
2. Railway will automatically detect FastAPI and deploy
3. Add your custom domain in Railway settings
4. Get automatic SSL certificate

### Option 2: Render
1. Connect your GitHub repository to Render
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add your custom domain

### Option 3: Heroku
1. Create a `Procfile` with: `web: uvicorn main:app --host 0.0.0.0 --port $PORT`
2. Deploy using Heroku CLI or GitHub integration
3. Add your custom domain

### Option 4: DigitalOcean App Platform
1. Connect your GitHub repository
2. Select Python environment
3. Set build command and start command
4. Add your custom domain

### Option 5: Traditional VPS
1. Upload files to your VPS
2. Install Python and dependencies
3. Use Gunicorn with Uvicorn workers
4. Set up Nginx as reverse proxy

## 🎨 Customization

### Adding New Routes
Edit the `ROUTES_DATA` list in `main.py`:

```python
ROUTES_DATA = [
    {
        "id": "new-route",
        "name": "New Route Name",
        "description": "Route description",
        "duration": "3-4 hours",
        "distance": "2.5 miles",
        "stops": ["📍 Stop 1", "🛒 Stop 2", "🍺 Stop 3"],
        "image": "new-route"
    }
]
```

### Styling
Modify `static/styles.css` to:
- Change colors and gradients
- Adjust spacing and typography
- Update animations and transitions
- Customize responsive breakpoints

### Database Integration
The application is ready for database integration. You can easily add:
- SQLAlchemy for ORM
- PostgreSQL or SQLite for data storage
- User authentication
- Booking system
- Admin panel

## 📧 Contact Form

The contact form includes:
- Server-side validation with Pydantic
- Email format validation
- Route selection with dynamic data
- Date and time preferences
- Group size selection
- Newsletter subscription option

**To make it fully functional:**
1. Add email service (SendGrid, Mailgun, etc.)
2. Add database storage for contact submissions
3. Implement email notifications
4. Add spam protection (reCAPTCHA)

## 🎯 SEO Features

- Meta description and title tags for each page
- Semantic HTML structure
- Open Graph meta tags (can be enhanced)
- Schema markup (can be added)
- Sitemap generation (can be added)
- Robots.txt (can be added)

## 🔒 Security Considerations

- Form validation on both client and server side
- HTTPS deployment recommended
- Input sanitization with Pydantic
- CORS configuration (can be added)
- Rate limiting (can be added)

## 📈 Performance Optimization

- FastAPI's high performance
- Static file serving
- Template caching
- CDN for external resources
- Image optimization (when added)
- Database query optimization (when added)

## 🔧 Development

### Adding New Pages
1. Create a new template in `templates/`
2. Add a route in `main.py`
3. Update navigation in `templates/base.html`

### Adding New API Endpoints
```python
@app.get("/api/new-endpoint")
async def new_endpoint():
    return {"message": "Hello World"}
```

### Environment Variables
Create a `.env` file for configuration:
```env
DATABASE_URL=postgresql://user:pass@localhost/dbname
EMAIL_API_KEY=your_email_api_key
SECRET_KEY=your_secret_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or support, please contact:
- Email: info@chicagogrocerystorebarcrawl.com
- Website: [chicagogrocerystorebarcrawl.com](https://chicagogrocerystorebarcrawl.com)

---

**Built with ❤️ using FastAPI for Chicago's food and drink scene**
