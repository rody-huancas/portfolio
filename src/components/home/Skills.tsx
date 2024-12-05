import { Card, IconFigma, IconDBMySql, IconDocker, IconExpress, IconGit, IconGraphQL, IconJavaScript, IconMongoDB, IconNestJS, IconNextJS, IconNodeJS, IconPHP, IconPostgreSQL, IconReact, IconTailwindCSS, IconTypeOrm, IconTypeScript } from '@/components'

export const Skills = () => {
  return (
    <Card title="Mis Habilidades">
      <div className="grid grid-cols-5 gap-5">
        <IconJavaScript className="w-9 h-9" />
        <IconTypeScript className="w-9 h-9" />
        <IconPHP className="w-9 h-9" />

        <IconReact className="w-9 h-9" />
        <IconNextJS className="w-9 h-9" />
        <IconTailwindCSS className="w-9 h-9" />

        <IconNodeJS className="w-9 h-9" />
        <IconNestJS className="w-9 h-9" />
        <IconExpress className="w-9 h-9" />
        <IconGraphQL className="w-9 h-9" />
        <IconTypeOrm className="w-9 h-9" />

        <IconDBMySql className="w-9 h-9" />
        <IconPostgreSQL className="w-9 h-9" />
        <IconMongoDB className="w-9 h-9" />

        <IconGit className="w-9 h-9" />
        <IconDocker className="w-9 h-9" />
        <IconFigma className="w-9 h-9" />
      </div>
    </Card>
  )
}
