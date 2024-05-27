import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = createClient({
      projectId: '6ymwnjbz',
      dataset: 'production',
      apiVersion: '2024-02-11',
      useCdn: false
    });

    const query = `*[_type == "stamps"] | order(_createdAt asc) {
      title,
      description,
      price,
      quantity,
      images
    }`;

    const reports = await client.fetch(query);

    // if (!reports || reports.length === 0) {
    //   res.status(404).json({ error: 'Reports not found' });
    //   return;
    // }

    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching reports from Sanity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
