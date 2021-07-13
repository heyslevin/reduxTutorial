import React from 'react'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export const ReactionBubbles = ({ post }) => {
  const reactions = post.reactions

  const bubbles = Object.entries(reactions).map(([reaction, quantity]) => {
    let emojiReaction = reactionEmoji[reaction]
    if (quantity === 0) {
      return ''
    }

    return (
      <div key={reaction}>
        {emojiReaction}:{quantity}
      </div>
    )
  })

  return <div>{bubbles}</div>
}
