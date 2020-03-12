import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1"
import withCatalogItems from "./withCatalogItems";

import { observer, inject } from "mobx-react";


@withCatalogItems
@inject("routingStore", "uiStore")
@observer
class Recommendation extends Component{

    static propTypes = {
        catalogItems: PropTypes.array,
        shop: PropTypes.object.isRequired        
    };

    render() {
        console.log(this.props);

        const {
            catalogItems,
            shop
          } = this.props;

          const products = (catalogItems || []).map((item) => item.node.product);
        
          console.log(catalogItems)
          console.log(products)

        return (
            <div>
                <h2>Recomendacao</h2>
                 <CatalogGrid products={products} onItemClick={(event, product) => {
                    event.preventDefault();
                    console.log(product.title);
                }} />
                
                 
            </div>
        )
    }
};

export default Recommendation;