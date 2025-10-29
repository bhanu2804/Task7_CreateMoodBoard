import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Palette, Type, Image as ImageIcon } from 'lucide-react';

interface MoodBoardProps {
  images: string[];
}

export function MoodBoard({ images }: MoodBoardProps) {
  const colorPalette = [
    { name: 'Ocean Blue', hex: '#0EA5E9', description: 'Adventure & Freedom' },
    { name: 'Sunset Orange', hex: '#F97316', description: 'Warmth & Energy' },
    { name: 'Forest Green', hex: '#10B981', description: 'Nature & Growth' },
    { name: 'Sandy Beige', hex: '#D4A574', description: 'Comfort & Relaxation' },
    { name: 'Deep Navy', hex: '#1E3A8A', description: 'Trust & Depth' },
    { name: 'Coral Pink', hex: '#FB7185', description: 'Joy & Discovery' },
  ];

  const moods = [
    'Adventure',
    'Exploration',
    'Freedom',
    'Discovery',
    'Wanderlust',
    'Serenity',
    'Cultural',
    'Authentic',
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1>Travel App Mood Board</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          A curated collection of visual elements that capture the essence of adventure,
          exploration, and wanderlust. This mood board defines the emotional direction
          for our travel application.
        </p>
      </div>

      {/* Mood Keywords */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-neutral-700">
            <Palette className="w-4 h-4 mr-2" />
            Mood & Theme
          </Badge>
        </div>
        <div className="flex flex-wrap gap-3">
          {moods.map((mood) => (
            <span
              key={mood}
              className="px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-full text-sky-900"
            >
              {mood}
            </span>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-neutral-700">
            <ImageIcon className="w-4 h-4 mr-2" />
            Visual Inspiration
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden group">
                <ImageWithFallback
                  src={image}
                  alt={`Travel inspiration ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Color Palette */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-neutral-700">
            <Palette className="w-4 h-4 mr-2" />
            Color Palette
          </Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colorPalette.map((color) => (
            <Card key={color.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-32 w-full"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4 space-y-1">
                <p className="text-neutral-900">{color.name}</p>
                <p className="text-neutral-500 text-xs">{color.hex}</p>
                <p className="text-neutral-600 text-xs italic">{color.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-neutral-700">
            <Type className="w-4 h-4 mr-2" />
            Typography
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-neutral-500 text-xs uppercase tracking-wide">Headings</p>
              <h1 className="text-neutral-900">Discover the World</h1>
            </div>
            <div className="space-y-2">
              <h2 className="text-neutral-900">Your Next Adventure Awaits</h2>
            </div>
            <div className="space-y-2">
              <h3 className="text-neutral-900">Explore New Horizons</h3>
            </div>
            <p className="text-neutral-600 text-xs">
              Clean, modern sans-serif typography that conveys trust and clarity
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-neutral-500 text-xs uppercase tracking-wide">Body & UI Text</p>
              <p className="text-neutral-900">
                Embark on unforgettable journeys to breathtaking destinations around the globe.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-700">
                From pristine beaches to mountain peaks, discover experiences that will last a lifetime.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-600 text-sm">
                Book your adventure today and create memories that matter.
              </p>
            </div>
            <p className="text-neutral-600 text-xs">
              Readable, accessible body text for comfortable long-form reading
            </p>
          </Card>
        </div>
      </div>

      {/* Design Principles */}
      <Card className="p-8 bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
        <div className="space-y-4">
          <h3 className="text-sky-900">Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-sky-800">Visual Harmony</h4>
              <p className="text-sky-700 text-sm">
                Balance between vibrant imagery and calming negative space creates a peaceful browsing experience.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sky-800">Emotional Connection</h4>
              <p className="text-sky-700 text-sm">
                Colors and imagery evoke feelings of excitement, wonder, and the joy of discovery.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sky-800">Authenticity</h4>
              <p className="text-sky-700 text-sm">
                Real photography and natural colors build trust and showcase genuine travel experiences.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
