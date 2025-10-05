import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onClick?: () => void;
}

export default function Card({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  onClick 
}: CardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain p-4"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
