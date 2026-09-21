import { NextResponse } from 'next/server';
import { servicesData } from '@/data/services';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  // We map out the icon (React element) so it can be serialized to JSON safely
  const serializedService = {
    ...service,
    features: service.features.map(f => ({
      title: f.title,
      description: f.description,
      // We send the icon name as a string, e.g., "Monitor", "Zap", etc.
      iconName: (f.icon as any).displayName || (f.icon as any).name || 'Check'
    }))
  };

  return NextResponse.json(serializedService);
}
