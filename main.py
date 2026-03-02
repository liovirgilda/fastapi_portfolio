from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

# HTML routes

@app.get("/", response_class = HTMLResponse, include_in_schema = False)
def homepage():
    return f"<h1> Welcome to my Portfolio</h1>"