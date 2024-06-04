// ProductsPage.tsx
import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Container, Grid } from '@mui/material';

// * Components
import ProductSelect from '@/components/common/ProductSelect';
import MeasureSelect from '@/components/common/MeasureSelect';
import MaterialSelect from '@/components/common/MaterialSelect';
import PrintingSelect from '@/components/common/PrintingSelect';
import CoatingSelect from '@/components/common/CoatingSelect';
import SpecialTechnicSelect from '@/components/common/SpecialTechnicSelect';
import ArtworkSelect from '@/components/common/ArtworkSelect';
import SampleSelect from '@/components/common/SampleSelect';
import RemarkSelect from '@/components/common/RemarkSelect';
import PriceSummary from '@/components/common/PriceSummary';

// * Types
import { Product } from '@/types/product';
import { Material } from '@/types/material';
import { Coating } from '@/types/coatings';
import { SpecialTechnic } from '@/types/specialTechnics';
import {
  ProductSelectArtwork,
  ProductSelectCoating,
  ProductSelected,
  ProductSelectMaterial,
  ProductSelectMeasures,
  ProductSelectPrinting,
  ProductSelectSimple,
  ProductSelectSpecialTechnic,
} from '@/types/productSelect';
import { useCart } from '@/context/CartContext';

interface ProductsPageProps {
  products: Product[];
  materials: Material[];
  coatings: Coating[];
  specialTechnics: SpecialTechnic[];
}

interface SelectionState {
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
}

const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  materials,
  coatings,
  specialTechnics,
}) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const initialProductSelected: ProductSelected = {
    product: products[0],
    model: products[0].models[0],
  };
  const initialMeasures: ProductSelectMeasures = {
    width: 100,
    length: 100,
    height: 100,
  };
  const initialMaterial: ProductSelectMaterial = {
    material: materials[0],
    materialPrice: materials[0].materialPrice[0],
  };
  const initialPrinting: ProductSelectPrinting = {
    id: 1,
    printing: 'ด้านหน้า',
  };
  const initialCoating: ProductSelectCoating = {
    coating: coatings[0],
  };
  const initialSpecialTechnics: ProductSelectSpecialTechnic[] = [];

  const initialSelectionState: SelectionState = {
    productSelected: initialProductSelected,
    productSelectMeasures: initialMeasures,
    productSelectMaterial: initialMaterial,
    productSelectPrinting: initialPrinting,
    productSelectCoating: initialCoating,
    productSelectSpecialTechnics: initialSpecialTechnics,
    productSelectArtwork: {
      id: '1',
      name: 'ไม่ใช้อาร์ตเวิร์ค',
    },
    productSelectSimple: {
      id: '1',
      name: 'Soft and Online Proof',
      price: 0,
    },
    productSelectRemark: '',
    price: 0,
  };

  const [selectionState, setSelectionState] = useState<SelectionState>(
    initialSelectionState
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    let totalPrice = 0;
    totalPrice +=
      selectionState.productSelectMaterial.materialPrice.price *
      selectionState.productSelectMaterial.materialPrice.amount;
    totalPrice += selectionState.productSelectCoating.coating.price;
    totalPrice += selectionState.productSelectSimple.price;
    totalPrice += selectionState.productSelectSpecialTechnics.reduce(
      (acc, specialTechnic) => acc + specialTechnic.price,
      0
    );
    setSelectionState((prevState) => ({
      ...prevState,
      price: totalPrice,
    }));
  }, [
    selectionState.productSelectMaterial,
    selectionState.productSelectCoating,
    selectionState.productSelectSimple,
    selectionState.productSelectSpecialTechnics,
  ]);

  if (!isAuthenticated) {
    return null; // Return null to prevent rendering anything before redirection
  }

  const handleProductChange = (productSelected: ProductSelected) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelected: productSelected,
    }));
  };

  const handleMeasureChange = (measures: ProductSelectMeasures) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectMeasures: measures,
    }));
  };

  const handleMaterialChange = (material: ProductSelectMaterial) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectMaterial: material,
    }));
  };

  const handleCoatingChange = (coating: ProductSelectCoating) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectCoating: coating,
    }));
  };

  const handleSpecialTechnicChange = (
    specialTechnics: ProductSelectSpecialTechnic[]
  ) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectSpecialTechnics: specialTechnics,
    }));
  };

  const handleArtworkChange = (artwork: ProductSelectArtwork) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectArtwork: artwork,
    }));
  };

  const handleSampleChange = (sample: ProductSelectSimple) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectSimple: sample,
    }));
  };

  const handleRemarkChange = (remark: string) => {
    setSelectionState((prevState) => ({
      ...prevState,
      productSelectRemark: remark,
    }));
  };

  return (
    <Layout>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={3}
          sx={{ mt: 2, mb: 4 }}
        >
          <Grid
            item
            xs={12}
          >
            <ProductSelect
              products={products}
              productSelected={selectionState.productSelected}
              setProductSelected={handleProductChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <MeasureSelect
              productSelected={selectionState.productSelectMeasures}
              setProductSelected={handleMeasureChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <MaterialSelect
              materials={materials}
              productSelected={selectionState.productSelectMaterial}
              setProductSelected={handleMaterialChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <PrintingSelect />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <CoatingSelect
              coatings={coatings}
              productSelected={selectionState.productSelectCoating}
              setProductSelected={handleCoatingChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <SpecialTechnicSelect
              specialTechnics={specialTechnics}
              productSelected={selectionState.productSelectSpecialTechnics}
              setProductSelected={handleSpecialTechnicChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <ArtworkSelect
              productSelected={selectionState.productSelectArtwork}
              setProductSelected={handleArtworkChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <SampleSelect
              productSelected={selectionState.productSelectSimple}
              setProductSelected={handleSampleChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <RemarkSelect
              productSelected={selectionState.productSelectRemark}
              setProductSelected={handleRemarkChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <PriceSummary
              price={selectionState.price}
              materialPrice={selectionState.productSelectMaterial.materialPrice}
              addToCart={() => addToCart(selectionState)}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async () => {
  try {
    const [productsData, materialsData, coatingsData, specialTechnicData] =
      await Promise.all([
        fetchData(`http://localhost:3000/api/product.json`),
        fetchData(`http://localhost:3000/api/material.json`),
        fetchData(`http://localhost:3000/api/coating.json`),
        fetchData(`http://localhost:3000/api/special-technic.json`),
      ]);

    // ใช้ข้อมูลที่ได้รับมา
    const products = productsData.products;
    const materials = materialsData.materials;
    const coatings = coatingsData.coatings;
    const specialTechnics = specialTechnicData.specialTechnic;

    return {
      props: {
        products,
        materials,
        coatings,
        specialTechnics: specialTechnics || [],
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
        materials: [],
        coatings: [],
        specialTechnics: [],
      },
    };
  }
};

export default ProductsPage;
