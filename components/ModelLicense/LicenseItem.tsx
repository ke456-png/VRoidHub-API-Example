import styled from 'styled-components';

interface LicenseItemProps {
  label: string;
  value: string;
  variant: 'default' | 'allow' | 'bold';
}

export const LicenseItem = (props: LicenseItemProps) => {
  const { label, value, variant } = props;

  return (
    <StyledLicenseItem>
      <span>{label}</span>
      <span> : </span>
      <StyledLicenseValue variant={variant}>{value}</StyledLicenseValue>
    </StyledLicenseItem>
  );
};

const StyledLicenseItem = styled.div`
  color: ${(props) => props.theme.color.text2};
  margin: ${(props) => props.theme.spacing[8]}px;
`;

const StyledLicenseValue = styled.span<{ variant: 'default' | 'allow' | 'bold' }>`
  color: #adadad;
  font-weight: bold;
  ${(props) =>
    props.variant === 'allow' &&
    `
    color: ${props.theme.color.success};
  `}
  ${(props) =>
    props.variant === 'bold' &&
    `
    color: ${props.theme.color.text2};
    font-weight: bold;
  `}
`;
