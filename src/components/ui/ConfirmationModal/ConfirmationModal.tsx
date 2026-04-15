import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ActionButtons } from '../ActionButtons/ActionButtons';
import { Input } from '../Input/Input';
import { LinkButtons } from '../LinkButtons/LinkButtons';
import { MainButtons } from '../MainButtons/MainButtons';

// Иконки из assets
const clearIcon = "/src/assets/icons/close.svg";
const logoImage = "/src/assets/icons/MTG logo white.svg";

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ConfirmationContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
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
  transform: 'translate(-50%, calc(-50% + 61px))',
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

const HeadingRow = styled(Box)(({ theme }) => ({
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

const PhoneNumberText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'flex-start',
  width: '100%',
}));

const CodeInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
}));

const TimerText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: theme.palette.text.secondary,
  padding: '0 8px 8px 8px',
  width: '100%',
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  paddingTop: '24px',
  width: '100%',
}));

const ClearIconWrapper = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& img': {
    width: '12px',
    height: '12px',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export interface ConfirmationModalProps {
  /**
   * Номер телефона для подтверждения
   */
  phoneNumber?: string;
  
  /**
   * Обработчик подтверждения кода
   */
  onConfirm?: (code: string) => void;
  
  /**
   * Обработчик повторного звонка
   */
  onResend?: () => void;
  
  /**
   * Обработчик закрытия модального окна
   */
  onClose?: () => void;
  
  /**
   * Обработчик возврата к предыдущему шагу
   */
  onBack?: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  phoneNumber = '+7 (987) 654-32-10',
  onConfirm,
  onResend,
  onClose,
  onBack,
}) => {
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(32);
  const [canResend, setCanResend] = useState(false);

  // Таймер для повторного звонка
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleConfirm = () => {
    if (code.length === 4 && onConfirm) {
      onConfirm(code);
    }
  };

  const handleResend = () => {
    if (canResend && onResend) {
      onResend();
      setTimeLeft(32);
      setCanResend(false);
      setCode('');
    }
  };

  const handleClearCode = () => {
    setCode('');
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 4);
    setCode(value);
  };

  const isFormValid = code.length === 4;

  // Форматирование кода для отображения
  const formatCodeDisplay = () => {
    if (code.length === 0) return '_ _ _ _';
    return code.split('').join(' ') + ' _'.repeat(4 - code.length).split('').join(' ');
  };

  return (
    <ConfirmationContainer>
      {/* Логотип */}
      <LogoContainer>
        <LogoImage src={logoImage} alt="MTGAgro" />
      </LogoContainer>

      {/* Модальное окно */}
      <ModalContainer>
        {/* Заголовок */}
        <HeadingContainer>
          <HeadingRow>
            <ActionButtons 
              size="40" 
              type="Arrow Left" 
              onClick={onBack}
            />
            <TitleContainer>
              <TitleText>
                Подтвердите вход
              </TitleText>
            </TitleContainer>
          </HeadingRow>
          <HeadingRow>
            <TitleContainer>
              <SubtitleText>
                Мы позвоним на номер <PhoneNumberText>{phoneNumber}</PhoneNumberText>. 
                Введите последние 4 цифры входящего номера. Отвечать на звонок не нужно.
              </SubtitleText>
            </TitleContainer>
          </HeadingRow>
        </HeadingContainer>

        {/* Форма */}
        <FormContainer>
          <CodeInputContainer>
            <Input
              label="Код подтверждения"
              value={formatCodeDisplay()}
              onChange={handleCodeChange}
              fullWidth
              placeholder="Код подтверждения"
              state={code.length > 0 ? "Focused" : "Default"}
              endAdornment={
                code.length > 0 && (
                  <ClearIconWrapper onClick={handleClearCode}>
                    <img src={clearIcon} alt="clear" />
                  </ClearIconWrapper>
                )
              }
            />
            
            <TimerText>
              Повторный звонок будет доступен через {timeLeft} секунды
            </TimerText>
          </CodeInputContainer>

          <LinkButtons
            size="14"
            type="Primary"
            state={canResend ? "Default" : "Disable"}
            onClick={handleResend}
            disabled={!canResend}
          >
            Повторить звонок
          </LinkButtons>
        </FormContainer>

        {/* Кнопки */}
        <ButtonsContainer>
          <MainButtons
            size="56"
            type="Primary"
            state={isFormValid ? "Default" : "Disable"}
            fullWidth
            onClick={handleConfirm}
            disabled={!isFormValid}
          >
            Войти
          </MainButtons>
        </ButtonsContainer>
      </ModalContainer>
    </ConfirmationContainer>
  );
};

export default ConfirmationModal;
