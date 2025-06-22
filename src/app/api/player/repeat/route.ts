let isRepeatEnabled = false

export async function POST() {
    isRepeatEnabled = !isRepeatEnabled
    return Response.json({
        message: `Repeat ${isRepeatEnabled ? "enabled" : "disabled"}`,
        repeat: isRepeatEnabled,
    })
}