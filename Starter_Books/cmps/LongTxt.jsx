const { useState } = React

export function LongTxt({ txt, length = 100 }) {
    const [isExpanded, setIsExpanded] = useState(false)

    // Handle toggle between expanded and collapsed views
    function toggleExpand() {
        setIsExpanded(prev => !prev)
    }

    // If there's no text, render nothing
    if (!txt) return null

    const isLong = txt.length > length
    let displayedTxt = txt

    // If the text is long and not expanded, trim it
    if (isLong && !isExpanded) {
        displayedTxt = txt.slice(0, length) + '...'
    }

    return (
        <p>
            {displayedTxt}
            {/* Show toggle link only if the text is long */}
            {isLong && (
                <span
                    onClick={toggleExpand}
                    style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                >
                    {isExpanded ? 'Read less' : 'Read more'}
                </span>
            )}
        </p>
    )
}

