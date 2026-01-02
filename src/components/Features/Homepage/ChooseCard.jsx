export default function ChooseCard({image, title, description}) {
    return (
        <div className="p-4 border md:p-6 border-gray-200 rounded-[16px] shadow-md space-y-4">
          <div>
            <img className="w-[68px] mx-auto" src={image}/>
          </div>
          <div className="space-y-2 text-center">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
    );
}