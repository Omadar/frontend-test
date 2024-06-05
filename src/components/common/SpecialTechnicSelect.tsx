import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Grid,
  Button,
  Typography,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ProductSelectSpecialTechnic } from '@/types/productSelect';
import Image from 'next/image';

interface SpecialTechnicSelectProps {
  specialTechnics: ProductSelectSpecialTechnic[];
  productSelected: ProductSelectSpecialTechnic[];
  setProductSelected: (specialTechnics: ProductSelectSpecialTechnic[]) => void;
}

const SpecialTechnicSelect: React.FC<SpecialTechnicSelectProps> = ({
  specialTechnics,
  productSelected,
  setProductSelected,
}) => {
  const handleAddSelect = () => {
    if (productSelected.length < specialTechnics.length) {
      setProductSelected([
        ...productSelected,
        { id: '', name: '', price: 0, imageUrl: '' },
      ]);
    }
  };

  const handleDeleteSelect = (index: number) => {
    const updatedSelection = productSelected.filter((_, i) => i !== index);
    setProductSelected(updatedSelection);
  };

  const handleSpecialTechnicChange = (
    value: ProductSelectSpecialTechnic,
    index: number
  ) => {
    const updatedSelection = [...productSelected];
    updatedSelection[index] = value;
    setProductSelected(updatedSelection);
  };

  const isItemSelected = (id: string) => {
    return productSelected.some((technic) => technic.id === id);
  };

  return (
    <Grid
      container
      spacing={2}
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
            }}
          >
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold' }}
              gutterBottom
            >
              เทคนิคพิเศษ
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
            >
              จำนวน {productSelected.length} เทคนิคพิเศษ
            </Typography>
          </Box>
          {productSelected.map((selected, index) => (
            <Grid
              container
              spacing={2}
              key={index}
              sx={{ mb: 2, alignItems: 'center' }}
            >
              <Grid
                item
                xs={11}
              >
                <FormControl fullWidth>
                  <Select
                    sx={{
                      '& .MuiMenuItem-root': {
                        display: 'flex',
                        alignItems: 'center',
                      },
                    }}
                    value={selected.id}
                    onChange={(e) =>
                      handleSpecialTechnicChange(
                        specialTechnics.find(
                          (technic) => technic.id === e.target.value
                        ) || { id: '', name: '', price: 0, imageUrl: '' },
                        index
                      )
                    }
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    {specialTechnics.map((technic) => (
                      <MenuItem
                        value={technic.id}
                        key={technic.id}
                        disabled={
                          isItemSelected(technic.id) &&
                          technic.id !== selected.id
                        }
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color:
                            isItemSelected(technic.id) &&
                            technic.id !== selected.id
                              ? 'gray'
                              : 'inherit',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Image
                            width={50}
                            height={50}
                            src={technic.imageUrl}
                            alt={technic.name}
                          />
                          <Typography
                            variant='body1'
                            sx={{ ml: 2 }}
                          >
                            {technic.name} - {technic.price} บาท
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={1}
              >
                <IconButton onClick={() => handleDeleteSelect(index)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
          >
            <Button
              variant='contained'
              onClick={handleAddSelect}
              disabled={productSelected.length >= specialTechnics.length}
              sx={{ width: '100%' }}
            >
              <AddIcon />
              <Typography>เพิ่มเทคนิคพิเศษ</Typography>
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SpecialTechnicSelect;
