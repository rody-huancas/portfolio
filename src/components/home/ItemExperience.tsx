import Image from 'next/image'

interface Props {
  imageSrc   : string
  imageAlt   : string
  companyName: string
  position   : string
  period     : string
}
export const ItemExperience = (props: Props) => {
  const { imageSrc, imageAlt, companyName, position, period } = props

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="col-span-2 grid grid-cols-3">
        <div className="relative w-[60px] h-[50px] bg-gray-100/90 rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-lg object-cover p-1"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <h3 className="font-bold text-sm">{companyName}</h3>
          <p className="text-xs font-light italic">{position}</p>
        </div>
      </div>
      <div className="flex items-center justify-items-center">
        <p className="text-xs">{period}</p>
      </div>
    </div>
  )
}
