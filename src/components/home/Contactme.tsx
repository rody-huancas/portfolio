import Link from "next/link";
import { Card } from "../common/Card";
import { Title } from "../common/Title";
import { TbArrowElbowRight } from "react-icons/tb";

export const Contactme = () => {
  return (
    <Card>
      <div className="scroll-container bg-gray-400/30 p-4 mb-7 rounded-lg">
        <div className="animate-scroll">
          <span className="font-medium text-lg">
            Transformando ideas en soluciones innovadoras 🚀
          </span>
          <span className="font-medium text-lg">
            Comprometido con la excelencia digital 🎨
          </span>
          <span className="font-medium text-lg">
            Transformando ideas en soluciones innovadoras 🚀
          </span>
          <span className="font-medium text-lg">
            Comprometido con la excelencia digital 🎨
          </span>
        </div>
      </div>

      <div className="space-y-7">
        <div className="space-y-2">
          <Title title="Vamos👋" level="h4" />
          <Title title="a trabajar juntos" level="h5" />
        </div>

        <Link
          href="/contact"
          className="flex items-center gap-1 text-blue-600 underline"
        >
          Hablemos <TbArrowElbowRight size={20} />
        </Link>
      </div>
    </Card>
  );
};
