import type { CharacterModelSerializer } from '@/types/Response';
import { VRM1License } from './Vrm1License';
import { VRM0License } from './HubVrm0License';
import styled from 'styled-components';

export const ModelLicense = ({ model }: { model: CharacterModelSerializer }) => {
  const version = model.latest_character_model_version?.spec_version ?? '0.0';
  if (version === '1.0') {
    return (
      <LicenseContainer>
        <VRM1License meta={model.latest_character_model_version.vrm_meta} version={version} />
      </LicenseContainer>
    );
  }

  return (
    <LicenseContainer>
      <VRM0License license={model.license} version={version} />
    </LicenseContainer>
  );
};

const LicenseContainer = styled.div`
  border-top: solid thin ${(props) => props.theme.color.surface10};
  border-bottom: solid thin ${(props) => props.theme.color.surface10};
  padding: ${(props) => props.theme.spacing[16]}px;
`;
