import React, {useEffect, useState} from "react";
import Property from "./components/Property";
import {Grid} from "@material-ui/core";
import IntiniteScroll from "../../components/InfiniteScroll";

import axios from "axios";

const PropertyList = (props) => {

    const [properties, setProperties] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)
    const [retryCount, setRetryCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isOnTimeout, setIsOnTimeout] = useState(false);

    const getProperties = () =>  {

        setIsLoading(true);

        if (isOnTimeout) {
            return;
        }
        
        return axios.get(`http://app-homevision-staging.herokuapp.com/api_project/houses?page=${pageNumber}&per_page=20`)
        .then(response => {
            setProperties( properties.concat(response.data.houses));
            setPageNumber(pageNumber+1);
        })
        .catch( e => {
            setIsOnTimeout(true);
            setRetryCount( retryCount+1);
            setTimeout( ()=> {
                setIsOnTimeout(false);
                getProperties();
            }, 3000);
        } )
    }
    
    useEffect( ()=> {
            getProperties();  
    }, [])

    return (<IntiniteScroll
                getNext={getProperties}
                isLoading={isLoading}
                maxRetries={3}
            >
                <Grid container>
                    {properties.map( property => (
                        <Grid xs={12} sm={6} md={4} lg={3} item key={property.id}>
                            <Property {...property} />
                        </Grid>
                    ))}
                </Grid>
            </IntiniteScroll>)
}

export default PropertyList;