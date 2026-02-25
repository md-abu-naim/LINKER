"use client"
import { useState } from "react";

export const useCover = (coverFile) => {
    const [previewCover, setPreviewCover] = useState(null)
    useEffect(() => {
        if (!coverFile) return;

        const url = URL.createObjectURL(coverFile)
        setPreviewCover(url)

        return () => URL.revokeObjectURL(url)

    }, [coverFile])
}