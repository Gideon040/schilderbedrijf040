import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

const privacyPolicyContent = `
  <div class="prose max-w-none">
    <h1>Privacybeleid</h1>
    
    <p>Laatst bijgewerkt: 15 maart 2024</p>

    <h2>1. Inleiding</h2>
    <p>Schildersbedrijf040 ("wij", "ons" of "onze") respecteert uw privacy en zet zich in voor het beschermen van uw persoonsgegevens. Dit privacybeleid informeert u over hoe wij omgaan met uw persoonsgegevens wanneer u onze website bezoekt en vertelt u over uw privacyrechten.</p>

    <h2>2. De gegevens die we verzamelen</h2>
    <ul>
      <li>Identiteitsgegevens (naam, adres)</li>
      <li>Contactgegevens (e-mail, telefoonnummer)</li>
      <li>Technische gegevens (IP-adres, browsergegevens)</li>
      <li>Gebruiksgegevens (informatie over hoe u onze website gebruikt)</li>
    </ul>

    <h2>3. Hoe we uw gegevens gebruiken</h2>
    <p>We gebruiken uw gegevens om:</p>
    <ul>
      <li>Onze diensten aan u te leveren</li>
      <li>U te informeren over wijzigingen in onze diensten</li>
      <li>U de mogelijkheid te bieden om een account aan te maken</li>
      <li>Klantenservice te verlenen</li>
    </ul>

    <h2>4. Gegevensbewaring</h2>
    <p>We bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld.</p>

    <h2>5. Uw rechten</h2>
    <p>U heeft het recht om:</p>
    <ul>
      <li>Inzage te vragen in uw persoonsgegevens</li>
      <li>Correctie van uw persoonsgegevens te vragen</li>
      <li>Verwijdering van uw persoonsgegevens te vragen</li>
      <li>Bezwaar te maken tegen verwerking van uw persoonsgegevens</li>
    </ul>

    <h2>6. Contact</h2>
    <p>Voor vragen over dit privacybeleid kunt u contact met ons opnemen via:</p>
    <ul>
      <li>E-mail: info@schildersbedrijf040.nl</li>
      <li>Telefoon: 06-38903004</li>
      <li>Adres: Jacob van Campenweg 22, 5624CD Eindhoven</li>
    </ul>
  </div>
`;

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}