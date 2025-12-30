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

export function EmojiPop({ emoji,count}: EmojiPopProps) {
  const [items, setItems] = useState<EmojiItem[]>([])

  const pop = () => {
    const base = Date.now()
    const newItems = Array.from({ length: count }, (_, i) => ({
      id: base + i,
      x: Math.random() * 120 - 80,
      y: Math.random() * -100
    }))
    setItems(newItems)

    setTimeout(() => setItems([]), 600)
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={pop}
        className="rounded  px-4 py-2 text-white"
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
              className="pointer-events-none absolute left-1/2 top-1/3 text-xl"
            >
              {emoji}
            </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
