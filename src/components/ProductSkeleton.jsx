import { Card, CardContent, Box, Skeleton } from '@mui/material';
const IMAGE_HEIGHT = 240;

const ProductSkeleton = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        border: "1px solid #e5e7eb",
      }}
    >
      <Skeleton 
        variant="rectangular" 
        height={IMAGE_HEIGHT} 
        animation="wave" 
      />

      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Skeleton height={30} width="90%" animation="wave" sx={{ mb: 1 }} />
        <Skeleton height={30} width="60%" animation="wave" sx={{ mb: 2 }} />

        <Box sx={{ mt: "auto" }}>
          <Skeleton height={20} width="40%" animation="wave" sx={{ mb: 2 }} />
          <Skeleton height={50} width="100%" animation="wave" sx={{ borderRadius: 1 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductSkeleton;