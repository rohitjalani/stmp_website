// pages/api/sanity.js

export default async function handler(req, res) {
    const url = 'https://6ymwnjbz.api.sanity.io/v2024-02-11/data/query/production' + req.url;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  }
  