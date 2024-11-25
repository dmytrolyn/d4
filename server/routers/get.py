from fastapi import APIRouter
from constants.urls import BASE_URL
from constants.limits import PAGE_SIZE
import requests
import json
from datetime import datetime, timedelta

router = APIRouter()

GET_HEADERS = {
 "accept": "application/json",
}

@router.get('/')
def get_cve(key: str):
 params = { 'keywordSearch': key, 'resultsPerPage': PAGE_SIZE }
 return requests.get(BASE_URL, params)

@router.get('/all')
def get_all_cve():
 pubEnd = datetime.now()
 pubStart = pubEnd - timedelta(days=5)

 params = { 'resultsPerPage': PAGE_SIZE, 'startIndex': 0, 'pubStartDate': pubStart, 'pubEndDate': pubEnd }
 try:
  # response = requests.get(BASE_URL, headers=GET_HEADERS, params=params)
  with open('data2.json', 'r', encoding='utf-8') as file: 
   data = json.load(file)
  return data
 
 except requests.RequestException as error:
  return { error: error.errno }

@router.get('/new')
def get_new_cve():
 return []

@router.get('/critical')
def get_critical_cve():
 return []
