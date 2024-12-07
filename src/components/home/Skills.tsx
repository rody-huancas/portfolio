import { Card, IconFigma, IconDBMySql, IconDocker, IconExpress, IconGit, IconGraphQL, IconJavaScript, IconMongoDB, IconNestJS, IconNextJS, IconNodeJS, IconPHP, IconPostgreSQL, IconReact, IconTailwindCSS, IconTypeOrm, IconTypeScript } from '@/components'

export const Skills = () => {
  return (
    <Card title="Mis Habilidades">
      <div className="grid grid-cols-5 gap-3">
        <IconJavaScript className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconTypeScript className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconPHP className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />

        <IconReact className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconNextJS className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconTailwindCSS className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />

        <IconNodeJS className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconNestJS className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconExpress className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconGraphQL className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconTypeOrm className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />

        <IconDBMySql className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconPostgreSQL className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconMongoDB className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />

        <IconGit className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconDocker className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
        <IconFigma className="bg-gray-100 dark:bg-gray-100/20 p-2 rounded-xl w-12 h-12" />
      </div>
    </Card>
  )
}
