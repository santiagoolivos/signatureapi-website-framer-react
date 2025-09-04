import ForDevelopers from '../components/home/for-developers'
import SigningExample from '../components/home/signing-example'
import CodeSection from '../components/home/code-section'
import Integrations from '../components/home/integrations'
import AiAgents from '../components/home/ai-agents'
import BigFeatures from '../components/home/big-features'
import TrackSignature from '../components/home/track-signature'
import FeaturesBuildOn from '../components/home/features-build-on'
import LegallyBinding from '../components/home/legally-binding'
import SignatureapiFuels from '../components/home/signatureapi-fuels'
import ReadyGetStarted from '../components/home/ready-get-started'

export default function Home() {
  return (
    <>
      <ForDevelopers.Responsive/>
      <SigningExample.Responsive/>
      <CodeSection.Responsive/>
      <Integrations.Responsive/>
      <AiAgents.Responsive/>
      <BigFeatures.Responsive/>
      <TrackSignature.Responsive/>
      <FeaturesBuildOn.Responsive/>
      <LegallyBinding.Responsive/>
      <SignatureapiFuels.Responsive/>
      <ReadyGetStarted.Responsive/>
    </>
  );
}
