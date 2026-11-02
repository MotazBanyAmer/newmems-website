import * as React from "react"

interface ToastContextType {
  toast: (options: { title: string; description?: string }) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Array<{ id: number; title: string; description?: string }>>([])

  const toast = React.useCallback(({ title, description }: { title: string; description?: string }) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, title, description }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto bg-card border border-border shadow-2xl rounded-xl p-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          >
            <div className="font-semibold text-foreground text-sm">{t.title}</div>
            {t.description && (
              <div className="text-muted-foreground text-xs mt-1">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return ctx
}
