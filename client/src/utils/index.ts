import { cveUrls } from "@/api";

export const requestsMapping = [
  {
    url: cveUrls.all,
    title: "Past 5 days (max 40)",
  },
  {
    url: cveUrls.new,
    title: "10 newest",
  },
  {
    url: cveUrls.critical,
    title: "10 critical",
  },
];

export const searchItem = (value: string) => ({
  url: cveUrls.search(value),
  title: "Search by entry",
});
