from fastapi import FastAPI, Request, Form, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from pathlib import Path

# Initialize FastAPI app
app = FastAPI(
    title="Chicago Grocery Store Bar Crawl",
    description="Discover Chicago's hidden gems through local markets and craft beverages",
    version="1.0.0"
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Templates
templates = Jinja2Templates(directory="templates")

# Pydantic models for form validation
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    route: str
    message: Optional[str] = None

# Sample data for routes
ROUTES_DATA = [
    {
        "id": "clark-division-route",
        "name": "Clark/Division to Shakers Route",
        "description": "Experience the perfect blend of grocery shopping and bar hopping through Chicago's vibrant neighborhoods",
        "duration": "3-4 hours",
        "distance": "2.8 miles",
        "stops": [
            "📍 Start at Jewel at Clark/Division 🍾",
            "🛒 Whole Foods OR Mariano's at North/Clybourn 🍺",
            "🛒 Mariano's on Broadway 🍹",
            "🎤 End at Shakers on Clark 🎤"
        ],
        "image": "clark-division"
    }
]

# Sample gallery data
GALLERY_DATA = [
    {"title": "Craft Beer", "emoji": "🍺"},
    {"title": "Local Markets", "emoji": "🛒"},
    {"title": "City Views", "emoji": "🌆"},
    {"title": "Wine Tasting", "emoji": "🍷"},
    {"title": "Artisanal Foods", "emoji": "🥨"},
    {"title": "Good Times", "emoji": "🎉"}
]

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Home page with hero section"""
    return templates.TemplateResponse("index.html", {
        "request": request,
        "routes": ROUTES_DATA,
        "gallery": GALLERY_DATA,
        "page_title": "Chicago Grocery Store Bar Crawl - The Ultimate Urban Adventure",
        "page_description": "Discover Chicago's hidden gems with our unique grocery store bar crawl. Experience the city's diverse neighborhoods through local markets and craft beverages."
    })

@app.get("/routes", response_class=HTMLResponse)
async def routes(request: Request):
    """Routes page with detailed information"""
    return templates.TemplateResponse("routes.html", {
        "request": request,
        "routes": ROUTES_DATA,
        "page_title": "Bar Crawl Routes - Chicago Grocery Store Bar Crawl",
        "page_description": "Explore our curated bar crawl routes through Chicago's best neighborhoods. From Wicker Park to Lincoln Park, discover local markets and craft beverages."
    })

@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    """About page"""
    return templates.TemplateResponse("about.html", {
        "request": request,
        "page_title": "About Us - Chicago Grocery Store Bar Crawl",
        "page_description": "Learn about our unique concept combining local markets with craft beverages for the ultimate Chicago experience."
    })

@app.get("/gallery", response_class=HTMLResponse)
async def gallery(request: Request):
    """Gallery page"""
    return templates.TemplateResponse("gallery.html", {
        "request": request,
        "gallery": GALLERY_DATA,
        "page_title": "Gallery - Chicago Grocery Store Bar Crawl",
        "page_description": "Browse photos and memories from our Chicago grocery store bar crawl experiences."
    })

@app.get("/contact", response_class=HTMLResponse)
async def contact(request: Request):
    """Contact page with form"""
    from datetime import date
    return templates.TemplateResponse("contact.html", {
        "request": request,
        "routes": ROUTES_DATA,
        "today": date.today().isoformat(),
        "page_title": "Contact Us - Chicago Grocery Store Bar Crawl",
        "page_description": "Get in touch to book your Chicago grocery store bar crawl experience. We'll help you plan the perfect route."
    })

@app.post("/contact")
async def submit_contact(
    name: str = Form(...),
    email: str = Form(...),
    route: str = Form(...),
    message: Optional[str] = Form(None)
):
    """Handle contact form submission"""
    try:
        # Validate email format
        contact_data = ContactForm(
            name=name,
            email=email,
            route=route,
            message=message
        )
        
        # Here you would typically:
        # 1. Save to database
        # 2. Send email notification
        # 3. Log the contact request
        
        # For now, we'll just return success
        return {
            "success": True,
            "message": "Thank you for your message! We'll get back to you soon.",
            "data": contact_data.dict()
        }
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/routes")
async def get_routes():
    """API endpoint to get all routes"""
    return {"routes": ROUTES_DATA}

@app.get("/api/routes/{route_id}")
async def get_route(route_id: str):
    """API endpoint to get a specific route"""
    route = next((r for r in ROUTES_DATA if r["id"] == route_id), None)
    if not route:
        raise HTTPException(status_code=404, detail="Route not found")
    return {"route": route}

@app.get("/api/gallery")
async def get_gallery():
    """API endpoint to get gallery items"""
    return {"gallery": GALLERY_DATA}

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "Chicago Grocery Store Bar Crawl API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 