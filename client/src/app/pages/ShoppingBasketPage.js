import React, { } from 'react';

import './ShoppingBasket.scss';
import { VegetablesList } from '../components/vegetables';

const ShoppingBasketPage = ({children}) => {
  return (
    <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-10 col-md-offset-1 shopping__basket">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Aantal</th>
                        <th class="text-center">Prijs</th>
                        <th class="text-center">Totaal</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td class="col-md-6">
                        <div class="media">
                            <div class="media-body">
                            </div>
                        </div></td>
                        <td class="col-md-1">
                        </td>
                        <td class="col-md-1 text-center"><strong></strong></td>
                        <td class="col-md-1 text-center"><strong></strong></td>
                        <td class="col-md-1">
                        
                        </td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotaal</h5></td>
                        <td class="text-right"><h5><strong>€0,00</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Verzendingskosten</h5></td>
                        <td class="text-right"><h5><strong>€0,00</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Totaal</h3></td>
                        <td class="text-right"><h3><strong>€0,00</strong></h3></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td>
                        <button type="button" class="btn btn-default">
                            <span class="glyphicon glyphicon-shopping-cart"></span> Doorgaan met winkelen
                        </button></td>
                        <td>
                        <button type="button" class="btn btn-success">
                            Afrekenen <span class="glyphicon glyphicon-play"></span>
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