import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import List from '@mui/material/List';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import PageHeader from '../../components/pagetemplate/PageHeader';
import PageContent from '../../components/pagetemplate/PageContent';
import PageContentLabels from '../../components/pagetemplate/PageContentLabels';

const pageLabel = 'Products';

const itemsLabels = ['Id','Name','Price','Category','Count',  'Rating','Actions',];

const productsList = [
  { name: 'P1', price: 1, category: 'C1', count: 1, rating: 1, id: 1 },
  { name: 'P2', price: 2, category: 'C2', count: 2, rating: 2, id: 2 },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    setProducts(productsList);
  };
  const editProduct = async (id) => {
    alert(`editProduct(): ${id}`);
  };
  
  const deleteProduct = async (id) => {
    alert(`deleteProduct(): ${id}`);
  };
  
  const createProduct = async () => {
    alert('createProduct()');
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <List>
      <PageHeader pageLabel={pageLabel}>
        <PageActions createProduct={createProduct} />
      </PageHeader>
      <PageContent>
        <PageContentLabels labels={itemsLabels} />
        <PageContentItems products={products} editProduct={editProduct} deleteProduct={deleteProduct}/>
      </PageContent>
    </List>
  );
}

function PageContentItems({ products, editProduct, deleteProduct }) {
  return (
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>{product.count}</TableCell>
          <TableCell>{product.rating}</TableCell>
          <PageContentActions id={product.id} editProduct={editProduct} deleteProduct={deleteProduct}/>
        </TableRow>
      ))}
    </TableBody>
  );
}

function PageActions({ createProduct }) {
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => createProduct()}
      >
        Create
      </Button>
    </>
  );
}

function PageContentActions({ id, editProduct, deleteProduct}) {
  return (
    <>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          onClick={() => editProduct(id)}
        >
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </Button>
      </TableCell>
    </>
  );
}
