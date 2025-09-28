import type { ReactNode } from "react";
import { useParams } from "react-router";

export default function BoeardPage():ReactNode {
    const {id}=useParams()
    return(
        <div>Board page {id}
            
        </div>
    )
}