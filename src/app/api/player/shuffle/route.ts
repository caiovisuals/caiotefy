let isShuffleEnabled = false

export async function POST() {
    isShuffleEnabled = !isShuffleEnabled
    return Response.json({
        message: `Shuffle ${isShuffleEnabled ? "enabled" : "disabled"}`,
        shuffle: isShuffleEnabled,
    })
}