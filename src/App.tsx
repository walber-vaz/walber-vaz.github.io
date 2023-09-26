import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const App: React.FC = (): JSX.Element => {
  return (
    <main
      className={cn(
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'min-h-screen',
        'h-screen',
        'w-[1280px]',
        'mx-auto',
      )}
    >
      <h1 className={cn('text-6xl', 'text-center', 'text-green-500')}>
        Walber Vaz
      </h1>
      <Button
        className={cn(
          'mt-4',
          'px-4',
          'py-2',
          'text-lg',
          'bg-transparent',
          'border-2',
          'border-solid',
          'rounded-md',
          'transition-colors',
          'duration-300',
          'ease-in-out',
          'text-green-500',
          'border-green-500',
          'hover:bg-green-500',
          'hover:text-gray-900',
        )}
      >
        Entre em contato
      </Button>
    </main>
  )
}
