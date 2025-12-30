import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export type EmojiPopProps = {
  emoji?: string
  count?: number
}

type EmojiItem = {
  id: number
  x: number
  y: number
}

export function EmojiPop({ emoji , count }: EmojiPopProps) {
  const [items, setItems] = useState<EmojiItem[]>([])

  const pop = () => {
    const base = Date.now()
    const newItems  = Array.from({ length: count }, (_, i) => ({
      id: base + i,
      x: Math.random() * 120 - 80,
      y: Math.random() * -100
    }))
    setItems(newItems)

    setTimeout(() => setItems([]), 600)
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={pop}
        style={{
         
          padding: "0.5rem 1rem",
          
        }}
      >
        {emoji}
      </button>

      <AnimatePresence>
        {items.map(({ id, x, y }) => (
            <motion.span
              key={id}
              initial={{ scale: 0.5, opacity: 1, x: 0, y: 0 }}
              animate={{ scale:1, opacity: 0, x, y }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                pointerEvents: "none",
                fontSize: "1.25rem"
              }}
            >
              {emoji}
            </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
