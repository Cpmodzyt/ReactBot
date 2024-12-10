// Helper function to select a random emoji-reaction
export function getRandomPositiveReaction(reaction) {
    if (!Array.isArray(reaction) || reaction.length === 0) {
        console.error("Invalid reaction array provided.");
        return null; // Or return a default emoji
    }
    const randomIndex = Math.floor(Math.random() * reaction.length);
    return reaction[randomIndex];
}

// Get Emoji Array from String emoji set
export function splitEmojis(emojiString) {
    if (typeof emojiString !== "string" || emojiString.trim() === "") {
        console.error("Invalid emojiString provided to splitEmojis.");
        return []; // Return an empty array as fallback
    }
    const emojiRegex = /(\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji_Modifier_Base})/gu;
    return emojiString.match(emojiRegex) || [];
}

// Get Chat IDs from Env | Split by `,`
export function getChatIds(chats) {
    if (typeof chats !== "string" || chats.trim() === "") {
        console.error("Invalid chats string provided.");
        return []; // Return an empty array as fallback
    }
    return chats.split(',').map(Number).filter(Boolean);
}

// Helper function to return HTML with correct headers
export function returnHTML(content) {
    if (typeof content !== "string") {
        console.error("Invalid content provided to returnHTML.");
        return new Response("<h1>Invalid Content</h1>", {
            headers: { 'content-type': 'text/html' },
        });
    }
    return new Response(content, {
        headers: { 'content-type': 'text/html' },
    });
}
