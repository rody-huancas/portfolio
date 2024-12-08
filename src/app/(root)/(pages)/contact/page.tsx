import { Title, Input } from "@/components";

const Contact = () => {
  return (
    <div className="space-y-5">
      <Title title="👋 Vamos a trabajar" subtitle="juntos" />

      <p>
        Estoy aquí para ayudarte si buscas un desarrollador que pueda convertir
        tu producto digital en realidad o transformar tu idea en una aplicación
        escalable y funcional.
      </p>

      <div className="bg-light dark:bg-black/30 p-10 rounded-lg space-y-5">
        <Input label="Nombre" placeholder="Ingrese su nombre" />
        <Input label="Correo Electrónico" placeholder="Ej: correo@gmail.com"/>
        <div className="grid grid-cols-2 gap-5">
          <Input label="Celular" placeholder="Ej: 907 974 123" />
          <Input label="Ciudad" placeholder="Ingrese su Ciudad" />
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
