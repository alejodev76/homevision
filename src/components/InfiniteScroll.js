import React, {useEffect} from "react";
import {LinearProgress, Box} from "@material-ui/core";

const IntiniteScroll = (props) => {
    const {
        children,
        getNext,
        isLoading,
        maxRetries,
        isRetrying,
        fetchError
    } = props;

    const handleScroll = () => {
        
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
            return;
        } 
        getNext();
    }

    useEffect( ()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (<div>
        <div>{children}</div>
        {isLoading ? <Box pt={1} pb={8}><LinearProgress/><div>Loading...</div></Box> : null}
    </div>)
    
}

export default IntiniteScroll;