import Image from "next/image";
interface Props {
  imageSrc   : string;
  imageAlt   : string;
  companyName: string;
  position   : string;
  period     : string;
}
export const ItemExperience = (props: Props) => {
  const { imageSrc, imageAlt, companyName, position, period } = props;
  
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="flex items-center justify-center">
        <div className="relative w-[100px] h-[70px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center">
        <h3 className="font-bold">{companyName}</h3>
        <p className="text-sm font-light">{position}</p>
        <p className="text-sm italic">{period}</p>
      </div>
    </div>
  );
};