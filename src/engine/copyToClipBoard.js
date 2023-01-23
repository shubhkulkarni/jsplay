export const copyContent = async (text) => {
    
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed copying the code to clipboard 😢")
        }

    }
