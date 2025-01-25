import React from 'react';

const BrowseResourcesPage = () => {
  // Example array for resources - ideally, these could be fetched from an API
  const resources = [
    {
      id: 1,
      title: 'Environmental Conservation Guide',
      description: 'A comprehensive guide to understanding and practicing environmental conservation.',
      link: 'https://example.com/resource1', // Replace with actual link
      imageUrl: 'resource-image-1.jpg',  // Replace with actual image link
    },
    {
      id: 2,
      title: 'Sustainable Living Tips',
      description: 'Practical tips and tricks to adopt a sustainable lifestyle.',
      link: 'https://example.com/resource2', // Replace with actual link
      imageUrl: 'resource-image-2.jpg', // Replace with actual image link
    },
    {
      id: 3,
      title: 'Video Series on Climate Change',
      description: 'Watch this series of videos to understand the science and impact of climate change.',
      link: 'https://example.com/resource3', // Replace with actual link
      imageUrl: 'resource-image-3.jpg', // Replace with actual image link
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Browse Digital Resources</h1>
        <p className="text-lg mt-4">Access a variety of resources to empower students and children with environmental knowledge.</p>
      </header>

      {/* Resources List */}
      <section className="my-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">All Available Resources</h2>

        {/* Resources Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={resource.imageUrl}
                alt={resource.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-blue-600">{resource.title}</h3>
              <p className="text-gray-700 mt-3">{resource.description}</p>
              <div className="mt-4">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Access Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Tech-Enabled Awareness Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BrowseResourcesPage;
