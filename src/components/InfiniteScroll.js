import React, {useEffect} from "react";

const IntiniteScroll = (props) => {
    const {
        children,
        getNext,
        isLoading

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
        {isLoading ? <div>Loading</div> : null}
    </div>)
    
}

export default IntiniteScroll;