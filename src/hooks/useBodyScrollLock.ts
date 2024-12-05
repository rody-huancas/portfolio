import { useEffect } from 'react'

/**
 * Hook para bloquear o desbloquear el scroll del body.
 * @param isLocked Indica si el scroll debe estar bloqueado.
 */
export const useBodyScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isLocked])
}
