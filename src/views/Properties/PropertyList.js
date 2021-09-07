import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { usePropertiesListContext } from "../../state/properties/context";
import Property from "./components/Property";
import IntiniteScroll from "../../components/InfiniteScroll";

const PropertyList = () => {
  // get state and actions from the context to access context state
  const { state, actions } = usePropertiesListContext();
  const { usePropertyList, useError, useIsLoading } = state;

  const propertyList = usePropertyList();
  const error = useError();
  const isLoading = useIsLoading();

  // Create local state properties, used for page navigation and
  const [infinteList, setInfiniteList] = useState(propertyList);
  const [page, setPage] = useState(1);
  const [isRetry, setIsRetry] = useState(false);

  // Call to get the next set of properties
  const getNextPropertySet = () => {
    if (!isLoading || isRetry) {
      actions.getProperties({ page, perPage: 30 });
    }
  };

  // Initialize the list of properties
  useEffect(() => {
    getNextPropertySet();
  }, []);

  // Observe the error property and try to fetch data again after a 2 second delay
  useEffect(() => {
    if (error !== null) {
      setIsRetry(true);
      setTimeout(() => {
        getNextPropertySet();
      }, 1000);
    }
  }, [error]);

  // Update list in the component's state and append the new data set to the local list property
  useEffect(() => {
    if (propertyList.length > 0) {
      setInfiniteList(infinteList.concat(propertyList));
      setIsRetry(false);
      setPage(page + 1);
    }
  }, [propertyList]);

  return (
    <IntiniteScroll
      getNext={getNextPropertySet}
      isLoading={isLoading || isRetry}
    >
      <Grid container>
        {infinteList.map((property) => (
          <Grid xs={12} sm={6} md={4} lg={3} item key={property.id}>
            <Property photoURL={property.photoURL} address={property.address} />
          </Grid>
        ))}
      </Grid>
    </IntiniteScroll>
  );
};

export default PropertyList;
