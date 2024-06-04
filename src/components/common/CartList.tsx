import React, { useState } from 'react';
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';

// * Icons
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

// * Types
import {
  ProductSelected,
  ProductSelectMaterial,
  ProductSelectPrinting,
  ProductSelectCoating,
  ProductSelectSpecialTechnic,
  ProductSelectArtwork,
  ProductSelectSimple,
  ProductSelectMeasures,
} from '@/types/productSelect';
import Image from 'next/image';

// * Styles
const styles = {
  boxItem: {
    p: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

interface CartListProps {
  item: {
    id: string;
    productSelected: ProductSelected;
    productSelectMeasures: ProductSelectMeasures;
    productSelectMaterial: ProductSelectMaterial;
    productSelectPrinting: ProductSelectPrinting;
    productSelectCoating: ProductSelectCoating;
    productSelectSpecialTechnics: ProductSelectSpecialTechnic[];
    productSelectArtwork: ProductSelectArtwork;
    productSelectSimple: ProductSelectSimple;
    productSelectRemark: string;
    price: number;
  };
  removeFromCart: (id: string) => void;
}

const CartList: React.FC<CartListProps> = ({ item, removeFromCart }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleDeleteCart = (id: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      removeFromCart(id);
    };
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant='h6'>{item.productSelected.model.name}</Typography>
        <Box>
          <IconButton>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton onClick={(event) => handleDeleteCart(item.id)(event)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Image
          src={item.productSelected.model.imageUrl}
          alt={item.productSelected.model.name}
          width={100}
          height={100}
        />
        <Box
          sx={{
            ml: 2,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography variant='body1'>
              ขนาด {item.productSelectMeasures.width} x{' '}
              {item.productSelectMeasures.length} x{' '}
              {item.productSelectMeasures.height} mm. •{' '}
              {item.productSelectMaterial.material.gram} แกรม
            </Typography>
            <Typography variant='body1'>
              จำนวน: {item.productSelectMaterial.materialPrice.amount} ชิ้น (
              {item.productSelectMaterial.materialPrice.price}/ชิ้น)
            </Typography>
          </div>
          <Typography variant='body1'>ราคา: {item.price} บาท</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          direction: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            cursor: 'pointer',
          }}
          onClick={handleShowMore}
        >
          <Typography
            variant='body1'
            sx={{ mr: 1 }}
          >
            รายละเอียดสินค้า
          </Typography>
          <ArrowDropDownOutlinedIcon />
        </Box>
      </Box>
      {showMore && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            direction: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  ขนาด
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectMeasures.width} x{' '}
                  {item.productSelectMeasures.length} x{' '}
                  {item.productSelectMeasures.height} mm.
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  วัสดุ
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectMaterial.material.name} •{' '}
                  {item.productSelectMaterial.material.gram} แกรม
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  พิมพ์
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectPrinting.printing}
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  เคลือบ
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectCoating.coating.name}
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  เทคนิคพิเศษ
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                  width='auto'
                >
                  {item.productSelectSpecialTechnics.length > 0
                    ? item.productSelectSpecialTechnics.map((technic) => (
                        <React.Fragment key={technic.id}>
                          {technic.name}
                          <br />
                        </React.Fragment>
                      ))
                    : '-'}
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  อาร์ตเวิร์ก
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectArtwork.name}
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  ลิงก์ไฟล์งานอาร์ตเวิร์ก
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  -
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  ตัวอย่างสินค้า
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectSimple.name}
                </Typography>
              </Box>
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Box sx={styles.boxItem}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  หมายเหตุ
                </Typography>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                >
                  {item.productSelectRemark || '-'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CartList;
