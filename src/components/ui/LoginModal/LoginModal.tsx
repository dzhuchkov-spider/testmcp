import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ActionButtons } from '../ActionButtons/ActionButtons';
import { Input } from '../Input/Input';
import { LinkButtons } from '../LinkButtons/LinkButtons';
import { MainButtons } from '../MainButtons/MainButtons';

// Логотип из Figma
const logoImage = "https://www.figma.com/api/mcp/asset/ab4f3fcf-d80e-42e2-b6ed-89a63196a860";

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const LoginContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '141px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '28px',
  padding: '0 1.396px',
  overflow: 'hidden',
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '270.82px',
  height: '27.92px',
  flexShrink: 0,
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, calc(-50% + 39px))',
  backgroundColor: theme.palette.common.white,
  borderRadius: '32px',
  padding: '40px 32px',
  width: '424px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12)',
}));

const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'flex-start',
  width: '100%',
}));

const HeadingRow = styled(Box)<{ $hasButton?: boolean }>(({ theme, $hasButton }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start',
  width: '100%',
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '1px',
  minWidth: '1px',
  padding: '2px 0 6px 0',
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  letterSpacing: '-0.28px',
  color: theme.palette.text.primary,
  textAlign: 'center',
  width: '100%',
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  width: '100%',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: '16px',
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  paddingTop: '8px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export interface LoginModalProps {
  /**
   * Обработчик входа
   */
  onLogin?: (phone: string, password: string) => void;
  
  /**
   * Обработчик восстановления пароля
   */
  onForgotPassword?: () => void;
  
  /**
   * Обработчик входа по email
   */
  onEmailLogin?: () => void;
  
  /**
   * Обработчик закрытия модального окна
   */
  onClose?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onLogin,
  onForgotPassword,
  onEmailLogin,
  onClose,
}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Проверка валидности формы
  React.useEffect(() => {
    const isValid = phone.trim().length > 0 && password.trim().length > 0;
    setIsFormValid(isValid);
  }, [phone, password]);

  const handleLogin = () => {
    if (isFormValid && onLogin) {
      onLogin(phone, password);
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginContainer>
      {/* Логотип */}
      <LogoContainer>
        <LogoImage src={logoImage} alt="MTGAgro" />
      </LogoContainer>

      {/* Модальное окно */}
      <ModalContainer>
        {/* Заголовок */}
        <HeadingContainer>
          <HeadingRow $hasButton>
            <ActionButtons 
              size="40" 
              type="Arrow Left" 
              onClick={onClose}
            />
            <TitleContainer>
              <TitleText>
                С возвращением в Mtgagro.pro
              </TitleText>
            </TitleContainer>
          </HeadingRow>
          <HeadingRow>
            <TitleContainer>
              <SubtitleText>
                Заполните поля, чтобы выполнить вход в аккаунт
              </SubtitleText>
            </TitleContainer>
          </HeadingRow>
        </HeadingContainer>

        {/* Форма */}
        <FormContainer>
          <Input
            label="Телефон"
            value={phone}
            onChange={handlePhoneChange}
            fullWidth
            placeholder="Телефон"
          />

          <Input
            label="Пароль"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            placeholder="Пароль"
          />
        </FormContainer>

        {/* Кнопки */}
        <ButtonsContainer>
          <LinkButtons
            size="14"
            type="Primary"
            onClick={onForgotPassword}
          >
            Забыли пароль?
          </LinkButtons>

          <MainButtons
            size="56"
            type="Primary"
            state={isFormValid ? "Default" : "Disable"}
            fullWidth
            onClick={handleLogin}
            disabled={!isFormValid}
          >
            Далее
          </MainButtons>

          <LinkButtons
            size="14"
            type="Primary"
            onClick={onEmailLogin}
          >
            Войти по email
          </LinkButtons>
        </ButtonsContainer>
      </ModalContainer>
    </LoginContainer>
  );
};

export default LoginModal;
