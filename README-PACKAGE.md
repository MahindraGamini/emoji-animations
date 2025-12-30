# Pop Emojis 🎉

A React component for animated emoji pop effects.

## Installation

```bash
npm install pop-emojis
# or
yarn add pop-emojis
# or
pnpm add pop-emojis
```

## Usage

```tsx
import { EmojiPop } from 'pop-emojis'

function App() {
  return (
    <div>
      <EmojiPop emoji="🎉" count={6} />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `emoji` | `string` | `"🎉"` | The emoji to display when popped |
| `count` | `number` | `6` | Number of emojis to animate on click |



## Demo
https://jumpshare.com/s/bdxt3CZ5vQcolmaAu8bp

## Examples

```tsx
// Default usage
<EmojiPop />

// Custom emoji and count
<EmojiPop emoji="🔥" count={10} />

// Different emojis
<EmojiPop emoji="⭐" count={5} />
<EmojiPop emoji="❤️" count={8} />
```

## Requirements

- React 18 or higher
- framer-motion

## License

MIT

#Learnings 
-used framer motion 
-written test cases using vite 
-learnt more about package.json 