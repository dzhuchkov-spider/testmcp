import React from 'react';
import { styled } from '@mui/material';
import { Header } from './Header';
import { OrderStatuses } from './OrderStatuses';

// ========================================================================
// Figma Components Demo
// ========================================================================

const DemoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '24px',
  backgroundColor: '#f5f5f5',
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  minHeight: '100vh',
});

const Section = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const SectionTitle = styled('h2')({
  fontSize: '24px',
  fontWeight: 600,
  color: '#1A1F2E',
  margin: 0,
});

const DemoCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '24px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const Subtitle = styled('h3')({
  fontSize: '18px',
  fontWeight: 600,
  color: '#1A1F2E',
  margin: 0,
});

const Description = styled('p')({
  fontSize: '14px',
  color: '#666',
  margin: 0,
  lineHeight: '1.5',
});

const StatusGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '12px',
});

const StatusRow = styled('div')({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const FigmaComponentsDemo: React.FC = () => {
  return (
    <DemoContainer>
      <Section>
        <SectionTitle>Figma Components Demo</SectionTitle>
        
        {/* Header Demo */}
        <DemoCard>
          <Subtitle>Header Component</Subtitle>
          <Description>
            Полнофункциональный хедер на основе Figma дизайна (Node ID: 49-2679)
          </Description>
          
          <div style={{ maxWidth: '100%', overflow: 'auto' }}>
            <Header size="Desk" state="Logged in" />
          </div>
        </DemoCard>

        <DemoCard>
          <Subtitle>Header Variants</Subtitle>
          <Description>
            Различные состояния хедера: Logged in, Unlogged, Blocked, Part Blocked
          </Description>
          
          <StatusRow>
            <div style={{ maxWidth: '600px', overflow: 'auto' }}>
              <Description>Logged In:</Description>
              <Header size="Desk" state="Logged in" />
            </div>
          </StatusRow>
          
          <StatusRow>
            <div style={{ maxWidth: '600px', overflow: 'auto' }}>
              <Description>Unlogged:</Description>
              <Header size="Desk" state="Unlogged" />
            </div>
          </StatusRow>
          
          <StatusRow>
            <div style={{ maxWidth: '600px', overflow: 'auto' }}>
              <Description>Blocked:</Description>
              <Header size="Desk" state="Blocked" />
            </div>
          </StatusRow>
        </DemoCard>

        {/* OrderStatuses Demo */}
        <DemoCard>
          <Subtitle>Order Statuses Component</Subtitle>
          <Description>
            Статусы заказов на основе Figma дизайна (Node ID: 63-7342)
          </Description>
          
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 12px 0' }}>
              All Status Types (Size 28)
            </h4>
            <StatusGrid>
              <OrderStatuses size="28" type="Новый" />
              <OrderStatuses size="28" type="Принят" />
              <OrderStatuses size="28" type="Подтвержден" />
              <OrderStatuses size="28" type="На сборке" />
              <OrderStatuses size="28" type="Отправлен" />
              <OrderStatuses size="28" type="Принято клиентом" />
              <OrderStatuses size="28" type="Отклонен КК" />
              <OrderStatuses size="28" type="Отклонено" />
              <OrderStatuses size="28" type="Отменен" />
              <OrderStatuses size="28" type="Запрос на отмену" />
              <OrderStatuses size="28" type="В обработке" />
            </StatusGrid>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 12px 0' }}>
              Size Variants (Status: "Новый")
            </h4>
            <StatusRow>
              <OrderStatuses size="28" type="Новый" />
              <OrderStatuses size="24" type="Новый" />
              <OrderStatuses size="20" type="Новый" />
              <OrderStatuses size="20 - 9" type="Новый" />
            </StatusRow>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 12px 0' }}>
              Color-coded Status Groups
            </h4>
            <StatusGrid>
              <div>
                <Description style={{ marginBottom: '8px' }}>Success States:</Description>
                <StatusRow>
                  <OrderStatuses size="24" type="Новый" />
                  <OrderStatuses size="24" type="Принято клиентом" />
                </StatusRow>
              </div>
              
              <div>
                <Description style={{ marginBottom: '8px' }}>Progress States:</Description>
                <StatusRow>
                  <OrderStatuses size="24" type="Принят" />
                  <OrderStatuses size="24" type="Подтвержден" />
                  <OrderStatuses size="24" type="На сборке" />
                  <OrderStatuses size="24" type="Отправлен" />
                  <OrderStatuses size="24" type="В обработке" />
                </StatusRow>
              </div>
              
              <div>
                <Description style={{ marginBottom: '8px' }}>Warning States:</Description>
                <StatusRow>
                  <OrderStatuses size="24" type="Запрос на отмену" />
                </StatusRow>
              </div>
              
              <div>
                <Description style={{ marginBottom: '8px' }}>Error States:</Description>
                <StatusRow>
                  <OrderStatuses size="24" type="Отклонен КК" />
                  <OrderStatuses size="24" type="Отклонено" />
                  <OrderStatuses size="24" type="Отменен" />
                </StatusRow>
              </div>
            </StatusGrid>
          </div>
        </DemoCard>

        {/* Features */}
        <DemoCard>
          <Subtitle>Features & Technical Details</Subtitle>
          <Description>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>HeaderButtons:</strong> Компонент кнопок хедера с поддержкой счетчиков и состояний</li>
              <li><strong>Header:</strong> Полнофункциональный хедер с поиском, логотипом и информацией о компании</li>
              <li><strong>OrderStatuses:</strong> Универсальный компонент статусов заказов с 11 типами и 4 размерами</li>
              <li><strong>Design Tokens:</strong> Все цвета, размеры и шрифты извлечены из Figma</li>
              <li><strong>TypeScript:</strong> Полная типизация для всех компонентов</li>
              <li><strong>Responsive:</strong> Поддержка desktop и tablet версий</li>
              <li><strong>Accessibility:</strong> Семантическая разметка и правильные ARIA атрибуты</li>
            </ul>
          </Description>
        </DemoCard>
      </Section>
    </DemoContainer>
  );
};

export default FigmaComponentsDemo;
