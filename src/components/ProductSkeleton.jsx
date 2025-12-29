import { Card, CardContent, Box, Skeleton, Stack } from '@mui/material';

const ProductSkeleton = () => {
  return (
    <Card 
      elevation={0}
      sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 3, 
        border: '1px solid #e5e7eb'
      }}
    >
      {/* 1. IMAGE AREA: Wrapped in a Box to force height */}
      <Box sx={{ p: 2, height: 250, width: '100%', boxSizing: 'border-box' }}>
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave" 
          sx={{ borderRadius: 2 }} 
        />
      </Box>

      
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          
          <Skeleton variant="text" animation="wave" height={25} width="90%" />
          <Skeleton variant="text" animation="wave" height={25} width="60%" />
          
          
          <Box sx={{ pt: 1 }}>
             
            <Skeleton variant="text" animation="wave" height={20} width="40%" />
          </Box>
          
          <Skeleton variant="text" animation="wave" height={40} width="30%" />
        </Stack>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Skeleton 
          variant="rectangular" 
          animation="wave" 
          height={40} 
          width="100%" 
          sx={{ borderRadius: 1 }} 
        />
      </Box>
    </Card>
  );
};

export default ProductSkeleton;