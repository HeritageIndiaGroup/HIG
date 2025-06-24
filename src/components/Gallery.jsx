import { useEffect, useState } from 'react';
import { PlayCircle, X } from 'lucide-react';

const photos = [
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
  'https://images.unsplash.com/photo-1506765515384-028b60a970df',
  'https://images.unsplash.com/photo-1581091870622-3c47c2488ef3',
  'https://images.unsplash.com/photo-1610878180933-3306d2df3b58',
  'https://images.unsplash.com/photo-1564869736494-4e840d3e8d9c',
  'https://images.unsplash.com/photo-1616627982301-5d1c62e34d56',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
  'https://images.unsplash.com/photo-1612831194579-80b6c238aa3b',
  'https://images.unsplash.com/photo-1573164574396-9dcd883346bc',
  'https://images.unsplash.com/photo-1519681393784-a4ee963cd53e',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1510414936-78e76a6f6756',
  'https://images.unsplash.com/photo-1542204646-ac78680d22c9',
  'https://images.unsplash.com/photo-154203710485c7-096099477471',
  'https://images.unsplash.com/photo-1507525428034-b723cf961cfe',
];

const videos = [
  {
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    thumbnail: 'https://img.youtube.com/vi/_x1bK8m35jU/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/_x1bK8m35jU',
  },
  {
    thumbnail: 'https://img.youtube.com/vi/Sj3x1X3b60k/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/Sj3x1X3b60k',
  },
  {
    thumbnail: 'https://img.youtube.com/vi/gQ5tD8e722w/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/gQ5tD8e722w',
  },
];

const Gallery = () => {
  // State to manage active tab (photos or videos)
  const [activeTab, setActiveTab] = useState('photos');
  // State to manage lightbox visibility and content
  const [lightbox, setLightbox] = useState(null);

  // Effect to handle Escape key press for closing the lightbox
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', escHandler);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('keydown', escHandler);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans" id="gallery">
      {/* Gallery Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Gallery</h2>

      {/* Tabs for Photos and Videos */}
      <div className="flex justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveTab('photos')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
            ${activeTab === 'photos'
              ? 'bg-blue-600 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'
            }`}
          aria-pressed={activeTab === 'photos'}
        >
          Photos
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
            ${activeTab === 'videos'
              ? 'bg-blue-600 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'
            }`}
          aria-pressed={activeTab === 'videos'}
        >
          Videos
        </button>
      </div>

      {/* Photos Section: Displays photos in a responsive grid simulating masonry */}
      {activeTab === 'photos' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-min">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-transform duration-300 ease-in-out shadow-md"
              onClick={() => setLightbox(src)}
              role="button"
              tabIndex="0"
              aria-label={`View photo ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightbox(src);
                }
              }}
            >
              <img
                loading="lazy"
                src={`${src}?auto=format&fit=crop&w=800&q=80`}
                alt={`Photo ${i + 1}`}
                className="w-full h-auto object-cover rounded-md block" // 'block' helps remove unwanted space below images
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/CCCCCC/333333?text=Image+Load+Error`; }} // Fallback for image load error
              />
            </div>
          ))}
        </div>
      )}

      {/* Videos Section: Displays videos in a responsive grid */}
      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-transform duration-300 ease-in-out shadow-md"
              onClick={() => setLightbox(video.url)}
              role="button"
              tabIndex="0"
              aria-label={`Play video ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setLightbox(video.url);
                }
              }}
            >
              <img
                loading="lazy"
                src={video.thumbnail}
                alt={`Video Thumbnail ${i + 1}`}
                className="w-full h-60 object-cover rounded-md block"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x337/CCCCCC/333333?text=Video+Thumbnail`; }} // Fallback for thumbnail load error
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-md">
                <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Component for displaying full-size photos or playing videos */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 font-sans"
          onClick={() => setLightbox(null)}
          aria-modal="true"
          role="dialog"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button for lightbox */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Conditional rendering for image or video in lightbox */}
            {lightbox.includes('youtube') ? (
              <iframe
                src={lightbox}
                title="Video Player"
                className="w-full aspect-video rounded-lg shadow-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={lightbox}
                alt="Expanded View"
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
