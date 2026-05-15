import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'eacqbvhk',
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

export async function POST(req) {

  try {

    const body = await req.json();

    const response = await client.create({

      _type: 'rfq',

      name: body.name,
      email: body.email,
      company: body.company,
      product: body.product,
      message: body.message,

      createdAt: new Date().toISOString(),

    });

    return Response.json({
      success: true,
      data: response,
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message,
    });

  }

}