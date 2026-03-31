/**
 * Component Demo
 * 
 * Демонстрация всех новых UI компонентов
 */

import React, { useState } from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { MainButtons, ActionButtons, LinkButtons, Input } from './index';

export const ComponentDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        UI Components Demo
      </Typography>

      {/* Main Buttons */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Main Buttons
        </Typography>
        <Stack spacing={2} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <MainButtons type="Primary" size="56">
              Primary 56
            </MainButtons>
            <MainButtons type="Secondary" size="56">
              Secondary 56
            </MainButtons>
            <MainButtons type="Primary" size="56" disabled>
              Disabled 56
            </MainButtons>
          </Stack>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <MainButtons type="Primary" size="48">
              Primary 48
            </MainButtons>
            <MainButtons type="Secondary" size="48">
              Secondary 48
            </MainButtons>
            <MainButtons type="Primary" size="40">
              Primary 40
            </MainButtons>
          </Stack>
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Action Buttons */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Action Buttons
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <ActionButtons type="Favourit" size="48" />
            <ActionButtons type="Arrow Right" size="48" />
            <ActionButtons type="Arrow Left" size="48" />
            <ActionButtons type="Plus" size="48" />
            <ActionButtons type="Minus" size="48" />
          </Stack>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <ActionButtons type="Trash" size="40" />
            <ActionButtons type="Basket" size="40" />
            <ActionButtons type="Menu" size="40" />
            <ActionButtons type="Close" size="40" />
            <ActionButtons type="Refresh" size="40" />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <ActionButtons type="Add to basket" size="48" />
            <ActionButtons type="Сменить пароль" size="40" />
          </Stack>
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Link Buttons */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Link Buttons
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <LinkButtons type="Primary" size="16">
              Primary Link
            </LinkButtons>
            <LinkButtons type="Secondary" size="16">
              Secondary Link
            </LinkButtons>
            <LinkButtons type="Primary" size="16" disabled>
              Disabled Link
            </LinkButtons>
          </Stack>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <LinkButtons type="Primary" size="14">
              Small Link
            </LinkButtons>
            <LinkButtons type="Secondary" size="14" icon leftRight={false}>
              ← Back
            </LinkButtons>
            <LinkButtons type="Primary" size="14" icon leftRight>
              Next →
            </LinkButtons>
          </Stack>
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Input Components */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Input Components
        </Typography>
        <Stack spacing={3}>
          <Input
            label="Имя"
            placeholder="Введите ваше имя"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          
          <Input
            label="Email"
            state="Focused"
            placeholder="example@mail.com"
            value="test@example.com"
          />
          
          <Input
            label="Телефон"
            state="Error"
            caption="Некорректный формат номера"
            placeholder="+7 (999) 999-99-99"
          />
          
          <Input
            label="Пароль"
            state="Valid"
            type="password"
            value="password123"
          />
          
          <Input
            label="Отключенное поле"
            state="Disable"
            value="Значение"
            disabled
          />
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Interactive Demo */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Interactive Demo
        </Typography>
        <Stack spacing={3}>
          <Typography variant="body2">
            Попробуйте взаимодействовать с компонентами:
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <MainButtons
              type="Primary"
              size="48"
              onClick={() => alert('Main Button clicked!')}
            >
              Нажми меня
            </MainButtons>
            
            <ActionButtons
              type="Favourit"
              size="48"
              onClick={() => alert('Favourit clicked!')}
            />
            
            <LinkButtons
              type="Primary"
              size="16"
              onClick={() => alert('Link clicked!')}
            >
              Ссылка
            </LinkButtons>
          </Stack>
          
          <Input
            label="Интерактивный input"
            placeholder="Начните вводить текст..."
            state={inputFocused ? 'Focused' : 'Default'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
        </Stack>
      </Box>
    </Box>
  );
};
