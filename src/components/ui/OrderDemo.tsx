import React from 'react';
import { Box, Typography } from '@mui/material';
import { Order } from './Order';

// ========================================================================
// Order Demo Component
// Demonstrates different variants of the Order component
// ========================================================================

const OrderDemo: React.FC = () => {
  // Sample data for demonstration
  const sampleProductTypes = [
    {
      id: '1',
      name: 'Охлаждённые по графику',
      cost: '535.00 ₽',
      status: 'Отменен' as const,
      date: '30 декабря 2021',
    },
    {
      id: '2', 
      name: 'Замороженные',
      cost: '1 200.50 ₽',
      status: 'Новый' as const,
      date: '31 декабря 2021',
    },
  ];

  return (
    <Box sx={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Order Component Demo
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="h6">Default State</Typography>
        <Order
          type="Default"
          orderNumber="Заказ 012345674"
          orderInternalNumber="№4009863758"
          cost="7 754.90 ₽"
          companyName="ООО «Добронравов групп»"
          companyAddress="Сызрань, Самарская область, ул. Свердлова, дом 322, стр. 2А"
          showProductTypes={true}
          productTypes={sampleProductTypes}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="h6">Hover State</Typography>
        <Order
          type="Hover"
          orderNumber="Заказ 012345675"
          orderInternalNumber="№4009863759"
          cost="3 250.00 ₽"
          companyName="ООО «АгроРесурс»"
          companyAddress="Москва, ул. Тверская, дом 1"
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="h6">Disabled State</Typography>
        <Order
          type="Disabled"
          orderNumber="Заказ 012345676"
          orderInternalNumber="№4009863760"
          cost="1 150.75 ₽"
          companyName="ООО «Фермерское хозяйство»"
          companyAddress="Санкт-Петербург, Невский проспект, дом 50"
          showProductTypes={true}
          productTypes={[sampleProductTypes[0]]}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="h6">With Swap Icons</Typography>
        <Order
          type="Default"
          orderNumber="Заказ 012345677"
          orderInternalNumber="№4009863761"
          cost="8 990.00 ₽"
          companyName="ООО «Золотой колос»"
          companyAddress="Краснодар, ул. Красная, дом 100"
          showProductTypes={true}
          productTypes={sampleProductTypes}
          showSwap={true}
        />
      </Box>
    </Box>
  );
};

export default OrderDemo;
