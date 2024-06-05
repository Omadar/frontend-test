import React from 'react';
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Coating } from '@/types/coatings';
import { ProductSelectCoating } from '@/types/productSelect';
import Image from 'next/image';

interface CoatingSelectProps {
  coatings: Coating[];
  productSelected: ProductSelectCoating;
  setProductSelected: (coating: ProductSelectCoating) => void;
}

const CoatingSelect: React.FC<CoatingSelectProps> = ({
  coatings,
  productSelected,
  setProductSelected,
}) => {
  const handleChange = (newCoating: Partial<ProductSelectCoating>) => {
    setProductSelected({
      ...productSelected,
      ...newCoating,
    });
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
            sx={{ fontWeight: 'bold' }}
            gutterBottom
          >
            การเคลือบ
          </Typography>
          <FormControl
            fullWidth
            variant='outlined'
            margin='normal'
          >
            <Select
              labelId='product-select-label'
              id='product-select'
              value={productSelected.coating.id || ''}
              onChange={(event) => {
                const selectedProductId = parseInt(
                  event.target.value as string,
                  10
                );
                const selectedProduct = coatings.find(
                  (coating) => coating.id === selectedProductId
                );
                if (selectedProduct) {
                  handleChange({
                    coating: {
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      imageUrl: selectedProduct.imageUrl,
                      price: selectedProduct.price,
                    },
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
              {coatings.map((coating) => (
                <MenuItem
                  key={coating.id}
                  value={coating.id}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={coating.imageUrl}
                      alt={coating.name}
                      width={62}
                      height={62}
                      style={{ objectFit: 'cover' }} // เพิ่มสไตล์ที่คุณต้องการ
                    />
                    <Typography variant='body1'>{coating.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoatingSelect;
