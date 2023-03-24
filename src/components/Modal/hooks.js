import { useCallback } from "react";
import { useState } from "react"

export const useModal = () => {
    const [open,setOpen] = useState(false);

    const onDismiss = useCallback(()=>{
        setOpen(false);
    },[]);
}