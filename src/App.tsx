import { MoodBoard } from './components/MoodBoard';

export default function App() {
  const travelImages = [
    'https://images.unsplash.com/photo-1609373066983-cee8662ea93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjE2MzQ4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRyb3BpY2FsJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzYxNjg2MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1760229803660-fc5d996d9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbCUyMGpvdXJuZXl8ZW58MXx8fHwxNzYxNjM2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1562351768-f68650f3ec54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3NjE3MDY5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1759148413949-4fb5f0b03681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzJTIwbmF2aWdhdGlvbiUyMHZpbnRhZ2V8ZW58MXx8fHwxNzYxNjg2NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1497235332722-bc46e3a9d98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwdHJpcCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE3MTcxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-12">
        <MoodBoard images={travelImages} />
      </div>
    </div>
  );
}
