import React, { } from 'react';

import './ShoppingBasket.scss';

const ShoppingBasketPage = ({children}) => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1 shopping__basket">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Aantal</th>
                        <th className="text-center">Prijs</th>
                        <th className="text-center">Totaal</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td className="col-md-6">
                        <div className="media">
                            <div className="media-body">
                            </div>
                        </div></td>
                        <td className="col-md-1">
                        </td>
                        <td className="col-md-1 text-center"><strong></strong></td>
                        <td className="col-md-1 text-center"><strong></strong></td>
                        <td className="col-md-1">
                        
                        </td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotaal</h5></td>
                        <td className="text-right"><h5><strong>€0,00</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Verzendingskosten</h5></td>
                        <td className="text-right"><h5><strong>€0,00</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Totaal</h3></td>
                        <td className="text-right"><h3><strong>€0,00</strong></h3></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Doorgaan met winkelen
                        </button></td>
                        <td>
                        <button type="button" className="btn btn-success">
                            Afrekenen <span className="glyphicon glyphicon-play"></span>
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  );
};

export default ShoppingBasketPage;