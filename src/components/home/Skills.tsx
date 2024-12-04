import { Card, IconFigma, IconDBMySql, IconDocker, IconExpress, IconGit, IconGraphQL, IconJavaScript, IconMongoDB, IconNestJS, IconNextJS, IconNodeJS, IconPHP, IconPostgreSQL, IconReact, IconTailwindCSS, IconTypeOrm, IconTypeScript } from '@/components'

export const Skills = () => {
  return (
    <Card title="Mis Habilidades">
      <div className="grid grid-cols-5 gap-5">
        <IconJavaScript className="w-10 h-10" />
        <IconTypeScript className="w-10 h-10" />
        <IconPHP className="w-10 h-10" />

        <IconReact className="w-10 h-10" />
        <IconNextJS className="w-10 h-10" />
        <IconTailwindCSS className="w-10 h-10" />

        <IconNodeJS className="w-10 h-10" />
        <IconNestJS className="w-10 h-10" />
        <IconExpress className="w-10 h-10" />
        <IconGraphQL className="w-10 h-10" />
        <IconTypeOrm className="w-10 h-10" />

        <IconDBMySql className="w-10 h-10" />
        <IconPostgreSQL className="w-10 h-10" />
        <IconMongoDB className="w-10 h-10" />

        <IconGit className="w-10 h-10" />
        <IconDocker className="w-10 h-10" />
        <IconFigma className="w-10 h-10" />
      </div>
    </Card>
  )
}
