export default function GalleryItem({image}) {
    return (
    <img className="w-[70px] md:w-full h-[70px] md:h-[200px] object-cover rounded-xl mr-2" src={image} alt="" />
    );
}