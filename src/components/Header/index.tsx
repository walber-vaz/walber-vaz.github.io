import { cn } from '@/lib/utils'

export const Header: React.FC = (): JSX.Element => {
  return (
    <header
      className={cn(
        'flex',
        'items-center',
        'justify-between',
        'p-4',
        'text-white',
        'w-full',
        'max-w-[1280px]',
        'mx-auto',
      )}
    >
      <h1 className={cn('text-2xl', 'font-bold', 'text-green-500')}>
        &lt;Walber Vaz /&gt;
      </h1>
      <nav
        className={cn('items-center', 'justify-between', 'hidden', 'md:flex')}
      >
        <ul className={cn('flex', 'items-center', 'justify-between', 'gap-4')}>
          <li className={cn('text-green-500', 'text-xl')}>
            <a href="#about">Sobre</a>
          </li>
          <li className={cn('text-green-500', 'text-xl')}>
            <a href="#projects">Projetos</a>
          </li>
          <li className={cn('text-green-500', 'text-xl')}>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
