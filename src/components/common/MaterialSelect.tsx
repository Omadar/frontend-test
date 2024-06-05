import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Material } from '@/types/material';
import { ProductSelectMaterial } from '@/types/productSelect';

interface ProductSelectProps {
  materials: Material[];
  productSelected: ProductSelectMaterial;
  setProductSelected: (material: ProductSelectMaterial) => void;
}

export const MaterialSelect: React.FC<ProductSelectProps> = ({
  materials,
  productSelected,
  setProductSelected,
}) => {
  const handleChange = (newMaterial: Partial<ProductSelectMaterial>) => {
    setProductSelected({
      ...productSelected,
      ...newMaterial,
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
            sx={{
              fontWeight: 'bold',
            }}
            gutterBottom
          >
            วัสดุ
          </Typography>
          <Grid
            container
            spacing={3}
          >
            {materials.map((material) => (
              <Grid
                item
                key={material.id}
                xs={12}
                md={6}
              >
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: '2px solid transparent',
                    '&:hover': {
                      borderColor: '#7986cb',
                    },
                    ...(productSelected.material &&
                      productSelected.material.id === material.id && {
                        borderColor: '#9fa8da',
                        bgcolor: '#e8eaf6',
                      }),
                  }}
                  onClick={() =>
                    handleChange({
                      material: {
                        ...productSelected.material,
                        id: material.id,
                        name: material.name,
                        imageUrl: material.imageUrl,
                      },
                    })
                  }
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={material.imageUrl}
                      alt={material.name}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        ml: 2,
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 'bold',
                          color:
                            productSelected.material &&
                            productSelected.material.id === material.id
                              ? '#3949ab' // เปลี่ยนสีตัวอักษรเมื่อถูกเลือก
                              : undefined,
                        }}
                      >
                        {material.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          fontWeight: 'bold',
                          color:
                            productSelected.material &&
                            productSelected.material.id === material.id
                              ? '#3949ab' // เปลี่ยนสีตัวอักษรเมื่อถูกเลือก
                              : undefined,
                        }}
                      >
                        {material.gram} แกรม
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
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
            }}
            gutterBottom
          >
            จำนวน
          </Typography>
          <Grid
            container
            spacing={3}
          >
            {materials.map(
              (material) =>
                material.id === productSelected.material.id &&
                material.materialPrice.map((price) => (
                  <Grid
                    item
                    key={price.id}
                    xs={12}
                    md={6}
                  >
                    <Box
                      sx={{
                        bgcolor: 'background.paper',
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        '&:hover': {
                          borderColor: '#7986cb',
                        },
                        ...(productSelected.materialPrice &&
                          productSelected.materialPrice.id === price.id && {
                            borderColor: '#9fa8da',
                            bgcolor: '#e8eaf6',
                          }),
                      }}
                      onClick={() =>
                        handleChange({
                          materialPrice: {
                            ...productSelected.materialPrice,
                            id: price.id,
                            amount: price.amount,
                            price: price.price,
                          },
                        })
                      }
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 'bold',
                          color:
                            productSelected.materialPrice &&
                            productSelected.materialPrice.id === price.id
                              ? '#3949ab' // เปลี่ยนสีตัวอักษรเมื่อถูกเลือก
                              : undefined,
                        }}
                      >
                        {price.amount} จำนวน
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          fontWeight: 'bold',
                          color:
                            productSelected.materialPrice &&
                            productSelected.materialPrice.id === price.id
                              ? '#3949ab' // เปลี่ยนสีตัวอักษรเมื่อถูกเลือก
                              : undefined,
                        }}
                      >
                        {price.price} บาท/ชิ้น
                      </Typography>
                    </Box>
                  </Grid>
                ))
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MaterialSelect;
