from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow our frontend to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def home():
    return {
        "message": "Hello! FastAPI backend is connected successfully."
    }


@app.get("/student")
def get_student():
    return {
        "name": "Abhishek",
        "course": "MCA",
        "language": "Python",
        "goal": "Backend Developer"
    }