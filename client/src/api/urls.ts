const BASE_URL = "http://localhost:8000";

export const cveUrls = {
  all: `${BASE_URL}/get/all`,
  new: `${BASE_URL}/get/new`,
  critical: `${BASE_URL}/get/critical`,
  search: (key: string) => `${BASE_URL}/get?key=${key}`,
};

export const infoUrl = `${BASE_URL}/info`;
