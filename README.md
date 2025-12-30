# pop-emojis 
A tiny, opinionated React component that creates smooth emoji pop animations on click — built on top of Framer Motion.

Perfect for reactions, likes, feedback buttons, and fun micro-interactions with **zero animation setup**.

---

## Features

-  **One-line usage** — Add emoji pops in seconds
-  **Built on Framer Motion** — Smooth, physics-based animations
-  **Sensible defaults** — Works great out of the box
-  **Zero boilerplate** — No animation code required
-  **Fully typed** — Complete TypeScript support
-  **React 17+** — Compatible with modern React

---

##  Installation

```bash
npm install pop-emojis framer-motion
```

> **Note:** `framer-motion` is a peer dependency and must be installed separately.

---

##  Usage

### Basic Example

```tsx
import { EmojiPop } from "pop-emojis"

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <EmojiPop emoji="🫡" />
    </div>
  )
}
```
## Demo
## Demo

![Demo](https://raw.githubusercontent.com/MahindraGamini/pop-emojis/main/assets/npm-library.gif)


**What happens?**

1. You see 🫡
2. You click 🫡
3. Multiple 🫡 emojis pop out with smooth animations

### Custom Count

```tsx
<EmojiPop emoji="❤️" count={10} />
```

### Different Emojis

```tsx
<div style={{ display: "flex", gap: "1rem" }}>
  <EmojiPop emoji="🎉" />
  <EmojiPop emoji="👍" />
  <EmojiPop emoji="🔥" />
  <EmojiPop emoji="⭐" />
</div>
```

---

## ⚙️ Props

| Prop    | Type     | Default | Description                            |
|---------|----------|---------|----------------------------------------|
| `emoji` | `string` | `"🫡"`  | Emoji used for both button & animation |
| `count` | `number` | `6`     | Number of emojis per click             |

---

## 🤔 Why This Library?

Yes, you can use Framer Motion directly.

This library exists to:

**Remove repetitive animation code** — Don't write the same pop logic over and over
**Provide a ready-made reaction interaction** — Common UX pattern, pre-built
**Keep animation logic out of your app** — Focus on features, not micro-interactions

Think of it as a **pre-built micro-interaction**, not an animation engine.

---



## 🤝 Contributing

Issues and pull requests are welcome! Feel free to open an issue if you find a bug or have a feature request.
