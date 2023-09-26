import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Header } from './components/Header'

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main
        className={cn(
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'h-[calc(100%-4rem)]',
          'w-full',
          'px-2',
          'md:px-0',
          'md:max-w-[1280px]',
          'mx-auto',
        )}
      >
        <h1
          className={cn(
            'text-5xl',
            'md:text-6xl',
            'text-center',
            'text-green-500',
            'font-bold',
            'relative',
            'z-0',
          )}
        >
          &lt;Walber Vaz /&gt;
        </h1>
        <div
          className={cn(
            'flex',
            'flex-col',
            'md:flex-row',
            'items-center',
            'mt-8',
            'gap-4',
            'w-full',
            'max-w-[250px]',
            'md:max-w-[420px]',
          )}
        >
          <Button
            variant={'outline'}
            className={cn(
              'py-6',
              'text-xl',
              'text-white',
              'bg-transparent',
              'border-green-500',
              'hover:bg-green-500',
              'hover:border-green-500',
              'transition-colors',
              'duration-300',
              'w-full',
            )}
          >
            Entre em contato
          </Button>
          <Button
            variant={'link'}
            className={cn(
              'py-6',
              'text-xl',
              'bg-green-500',
              'border-green-500',
              'hover:bg-green-600',
              'hover:border-green-600',
              'transition-colors',
              'duration-300',
              'w-full',
            )}
          >
            <a href="/Walber Vaz da Silva.pdf" target="_blank">
              Download CV
            </a>
          </Button>
        </div>
      </main>
    </>
  )
}
