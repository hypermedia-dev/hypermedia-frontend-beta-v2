import Image from "next/image";

export interface ProfilePictureType{
  src:string, 
  name:string, 
  className:string, 
  width:number, 
  height:number
}

const ProfilePicture = (prop: ProfilePictureType) => {
  const { src, name, className, width, height } = prop;
  // Helper function to generate initials from the name
  const getInitials = (name:string) => {
    if (!name) return "N/A";
    const nameParts = name.trim().split(" ");
    const initials = (nameParts[0][0] + nameParts[nameParts.length-1][0]).toUpperCase();
    const microInitials = (nameParts[0][0] + nameParts[0][1]).toUpperCase();
    const userInitial = nameParts.length > 1 ? initials : microInitials;
    return (
        userInitial
    );
  };

  // Helper function to generate a random background color
  const getRandomColor = () => {
    const colors = [
      "#FF5733", "#33B5FF", "#FF33A1", "#33FF57", "#FFC300",
      "#8A33FF", "#33FFD1", "#FF3333", "#338AFF", "#33FF9A",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // If src is provided, render the image
  if (src) {
    return (
      <Image
        src={src}
        alt={name || "Profile Picture"}
        className={`${className} rounded-full w-12 h-12`}
        width={width} 
        height={height} 
        loading="lazy"
      />
    );
  }

  // Otherwise, render a div with the initials
  const initials = getInitials(name);
  const bgColor = getRandomColor();

  return (
    <div
      className="rounded-full w-12 h-12 flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <span className="text-white font-bold">{initials}</span>
    </div>
  );
};

export default ProfilePicture;
