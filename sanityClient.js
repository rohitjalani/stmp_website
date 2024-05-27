import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '6ymwnjbz',
  dataset: 'production',
  useCdn: true,
});

export default client;
