from fastapi import FastAPI, __version__
from fastapi.middleware.cors import CORSMiddleware
from routers import get

app = FastAPI()

origins = [
 "http://localhost:5173",
]

app.add_middleware(
 CORSMiddleware,
 allow_origins=origins,
 allow_credentials=True,
 allow_methods=["*"],
 allow_headers=["*"],
)

app.include_router(router=get.router, prefix="/get")

@app.get('/info')
def get_app_info():
 return {
  'app': f'Created with FastAPI of version {__version__}',
  'author': 'Dmytro Lyn'
 }