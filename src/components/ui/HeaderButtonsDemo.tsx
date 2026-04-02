import React from 'react';
import { styled } from '@mui/material';
import { HeaderButtons } from './HeaderButtons';

// ========================================================================
// HeaderButtons Demo Component
// ========================================================================

const DemoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '24px',
  backgroundColor: '#f5f5f5',
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
});

const Section = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const SectionTitle = styled('h3')({
  fontSize: '18px',
  fontWeight: 600,
  color: '#1A1F2E',
  margin: 0,
});

const DemoCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

const ButtonRow = styled('div')({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const Description = styled('p')({
  fontSize: '14px',
  color: '#666',
  margin: 0,
  lineHeight: '1.5',
});

export const HeaderButtonsDemo: React.FC = () => {
  return (
    <DemoContainer>
      <Section>
        <SectionTitle>HeaderButtons Component Demo</SectionTitle>
        
        <DemoCard>
          <SectionTitle>Button Types</SectionTitle>
          <Description>
            Различные типы кнопок: Profile, Like, Basket, Logo
          </Description>
          <ButtonRow>
            <HeaderButtons type="Profile" />
            <HeaderButtons type="Like" />
            <HeaderButtons type="Backet" />
            <HeaderButtons type="Logo" />
          </ButtonRow>
        </DemoCard>

        <DemoCard>
          <SectionTitle>Buttons with Counters</SectionTitle>
          <Description>
            Кнопки с бейджами счетчиков
          </Description>
          <ButtonRow>
            <HeaderButtons type="Profile" counter count={5} />
            <HeaderButtons type="Like" counter count={12} />
            <HeaderButtons type="Backet" counter count={3} />
          </ButtonRow>
        </DemoCard>

        <DemoCard>
          <SectionTitle>Hover States</SectionTitle>
          <Description>
            Состояния hover для различных типов кнопок
          </Description>
          <ButtonRow>
            <HeaderButtons type="Profile" state="Hover" />
            <HeaderButtons type="Like" state="Hover" />
            <HeaderButtons type="Backet" state="Hover" />
            <HeaderButtons type="Logo" state="Hover" />
          </ButtonRow>
        </DemoCard>

        <DemoCard>
          <SectionTitle>Features</SectionTitle>
          <Description>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Полностью основан на Figma дизайне (Node ID: 29-16373)</li>
              <li>Использует Tailwind CSS + TypeScript</li>
              <li>Все цвета и размеры из дизайн-токенов Figma</li>
              <li>Поддерживает различные состояния и типы</li>
              <li>Анимированные переходы</li>
              <li>Счетчики с настраиваемыми значениями</li>
            </ul>
          </Description>
        </DemoCard>
      </Section>
    </DemoContainer>
  );
};

export default HeaderButtonsDemo;
