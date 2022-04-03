import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        console.log('use effect mounted');
        setTimeout(()=>{
            // router.go()
            router.push("/");
        }, 3000)
    }, [])
    return (
        <div>Not Found</div>
    );
}

export default NotFound;