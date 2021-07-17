import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    console.log(product)

    useEffect(() => {
        fetch('https://intense-headland-62358.herokuapp.com/collect')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])


    const deleteEvent = id =>{

    }
  return (
    <MDBTable borderless>
      <MDBTableHead>
        <tr>
          <th scope="col">Product Name</th>
          <th scope="col">Weight</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
          {
              product.map(pd => {
                  return(
                <tr>
                    <th scope="row">{pd.name.name}</th>
                    <td>{pd.name.weight}</td>
                    <td>{pd.name.price}</td>
                    <td>
                        <span><button><EditIcon/></button></span>
                        <span><button onClick={()=>deleteEvent(pd._id)}><DeleteForeverIcon/></button></span>
                    </td>
                </tr>
                  )
              })
          }
        
      </MDBTableBody>
    </MDBTable>
  );
};

export default ManageProduct;
