import React, {useEffect, useState} from "react";
import Property from "./components/Property";
import IntiniteScroll from "../../components/InfiniteScroll";
import axios from "axios";

const PropertyList = (props) => {

    const [properties, setProperties] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    const [retryCount, setRetryCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const getProperties = () =>  {

        setIsLoading(true);

        return axios.get(`http://app-homevision-staging.herokuapp.com/api_project/houses?page=${pageNumber}&per_page=20`)
        .then(response => {
            setProperties( properties.concat(response.data.houses));
            setPageNumber(pageNumber+1);
            //setIsLoading(false)
        })
        .catch( e => {
            setRetryCount( retryCount+1);
            setTimeout(getProperties, 2000);
        } )
    }
    
    useEffect( ()=> {
        if (properties.length === 0){
            getProperties();
        }  
    }, [properties])

    return (<IntiniteScroll
        getNext={getProperties}>
        {properties.map( property => (
            <Property {...property} isLoading={isLoading} key={property.id}/>
        )
            )}
    </IntiniteScroll>)
}

export default PropertyList;