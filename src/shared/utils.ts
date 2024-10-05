// import { useRouter } from 'next/navigation';

// export const useNavigation = () => {
//   if (typeof window === 'undefined') {
//     // If this code is running on the server, return a stub
//     return {
//       goto: () => {
//         throw new Error('useNavigation can only be used on the client side');
//       }
//     };
//   }

//   const router = useRouter();

//   const goto = (route) => {
//     if (typeof route !== 'string') {
//       throw new Error('Route must be a string');
//     }
//     router.push(route);
//   };

//   return { goto };
// };


/**
 * Truncates a string to a specified number of words and adds ellipses at the end.
 * 
 * @param {string} text - The input string to be truncated.
 * @param {number} maxWords - The maximum number of words to keep.
 * @return {string} - The truncated string with ellipses.
 */
export function truncateTextByWords(text:string, maxWords=21) {
  // Split the text into an array of words
  const words = text.split(' ');

  // If the number of words is less than or equal to maxWords, return the text as is
  if (words.length <= maxWords) return text;
  
  // Otherwise, join the first maxWords words and add ellipses
  return words.slice(0, maxWords).join(' ') + '...';
}


export function generateProfilePic({ src, name }:{src:string, name:string}) {
  // Helper function to generate initials from the name
  const getInitials = (name:string) => {
    if (!name) return "N/A";
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) return nameParts[0][0].toUpperCase();
    return nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase();
  };

  // Helper function to generate a random background color
  const getRandomColor = () => {
    const colors = [
      '#FF5733', '#33B5FF', '#FF33A1', '#33FF57', '#FFC300', 
      '#8A33FF', '#33FFD1', '#FF3333', '#338AFF', '#33FF9A'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // If an image src is provided, return an <img> element
  if (src) {
    return `<img src="${src}" alt="${name || 'Profile Picture'}" class="rounded-full" />`;
  }

  // Otherwise, generate a profile picture with initials
  const initials = getInitials(name);
  const bgColor = getRandomColor();
  return `<div class="rounded-full w-12 h-12 flex items-center justify-center" style="background-color: ${bgColor};">
    <span class="text-white font-bold">${initials}</span>
  </div>`;
}
