import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { processPR, handleComment } from '@/app/actions/pr';

export async function POST(req: NextRequest) {
  try {
    // Read request body
    const body = await req.json();

    // Validate request method
    if (req.method !== 'POST') {
      return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    }

    // Validate webhook secret
    const signature = req.headers.get('x-hub-signature-256') || '';
    const secret = process.env.WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json({ message: 'Webhook secret is not defined' }, { status: 500 });
    }

    // Validate signature
    const hmac = crypto.createHmac('sha256', secret).update(JSON.stringify(body)).digest('hex');
    if (`sha256=${hmac}` !== signature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    // Get event type from headers
    const event = req.headers.get('x-github-event');
    if (!event) {
      return NextResponse.json({ message: 'Missing GitHub event header' }, { status: 400 });
    }

    // Process the webhook event
    if (event === 'pull_request' && ['opened', 'synchronize'].includes(body.action)) {
      const prUrl = body.pull_request.url;
      await processPR(prUrl); // Async PR processing
    } else if (event === 'issue_comment' && body.comment.body.includes('@CodeFox')) {
      await handleComment(body); // Chat handler
    }

    return NextResponse.json({ message: 'Received' }, { status: 200 });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
