import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { Product } from '@/types/product';
import { ProductSelected } from '@/types/productSelect';
import Image from 'next/image';

interface ProductSelectProps {
  products: Product[];
  productSelected: ProductSelected;
  setProductSelected: (productSelected: ProductSelected) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({
  products,
  productSelected,
  setProductSelected,
}) => {
  const handleChange = (updates: Partial<ProductSelected>) => {
    setProductSelected({ ...productSelected, ...updates });
  };

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontWeight: 'bold',
            }}
            gutterBottom
          >
            สินค้า
          </Typography>
          <FormControl
            fullWidth
            variant='outlined'
            margin='normal'
          >
            <Select
              labelId='product-select-label'
              id='product-select'
              value={productSelected.product.id || ''}
              onChange={(event) => {
                const selectedProductId = parseInt(
                  event.target.value as string,
                  10
                );
                const selectedProduct = products.find(
                  (product) => product.id === selectedProductId
                );
                if (selectedProduct) {
                  handleChange({
                    product: {
                      ...productSelected.product,
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      imageUrl: selectedProduct.imageUrl,
                    },
                    model: selectedProduct.models[0],
                  });
                }
              }}
              sx={{
                '& .MuiMenuItem-root': {
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            >
              {products.map((product) => (
                <MenuItem
                  key={product.id}
                  value={product.id}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={62}
                      height={62}
                      style={{ objectFit: 'cover' }} // เพิ่มสไตล์ที่คุณต้องการ
                    />
                    <Typography variant='body1'>{product.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontWeight: 'bold',
              pb: 2,
            }}
          >
            โมเดล
          </Typography>
          <Box>
            <Grid
              container
              spacing={3}
            >
              {products.map(
                (product) =>
                  product.id === productSelected.product.id &&
                  product.models.map((model) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={model.id}
                    >
                      <Card
                        onClick={() =>
                          handleChange({
                            model: {
                              ...productSelected.model,
                              id: model.id,
                              name: model.name,
                              imageUrl: model.imageUrl,
                            },
                          })
                        }
                        sx={{ maxWidth: 345, cursor: 'pointer', margin: '8px' }}
                        raised={productSelected.model.id === model.id}
                      >
                        <CardActionArea>
                          <Image
                            src={model.imageUrl}
                            alt={model.name}
                            width={0}
                            height={200}
                            layout='responsive'
                            objectFit='cover'
                            style={{ width: '100%', height: 'auto' }} // การตั้งค่าความสูงอัตโนมัติ
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                            >
                              {model.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
              )}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductSelect;
