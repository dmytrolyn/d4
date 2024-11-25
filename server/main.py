from fastapi import FastAPI, __version__
from routers import get

app = FastAPI()

app.include_router(router=get.router, prefix="/get")

@app.get('/info')
def get_app_info():
 return {
  'app': f'Created with FastAPI of version {__version__}',
  'author': 'Dmytro Lyn'
 }