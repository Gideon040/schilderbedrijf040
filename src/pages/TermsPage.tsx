import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

const termsContent = `
  <div class="prose max-w-none">
    <h1>Algemene Voorwaarden</h1>
    
    <p>Laatst bijgewerkt: 15 maart 2024</p>

    <h2>1. Algemeen</h2>
    <p>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten tussen Schildersbedrijf040 en de opdrachtgever.</p>

    <h2>2. Definities</h2>
    <ul>
      <li><strong>Opdrachtnemer:</strong> Schildersbedrijf040</li>
      <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die met opdrachtnemer een overeenkomst aangaat</li>
      <li><strong>Werk:</strong> Het totaal van de tussen opdrachtgever en opdrachtnemer overeengekomen werkzaamheden</li>
    </ul>

    <h2>3. Offertes en Aanbiedingen</h2>
    <ul>
      <li>Alle offertes zijn vrijblijvend, tenzij anders vermeld</li>
      <li>Offertes zijn 30 dagen geldig</li>
      <li>Prijsopgaven kunnen wijzigingen ondergaan door onvoorziene omstandigheden</li>
    </ul>

    <h2>4. Uitvoering van de Overeenkomst</h2>
    <p>Opdrachtnemer zal de overeenkomst naar beste inzicht en vermogen uitvoeren. Een en ander op grond van de op dat moment bekende stand der wetenschap.</p>

    <h2>5. Verplichtingen van de Opdrachtgever</h2>
    <p>De opdrachtgever zorgt ervoor dat:</p>
    <ul>
      <li>Opdrachtnemer tijdig kan beschikken over de voor het werk benodigde gegevens</li>
      <li>Opdrachtnemer toegang heeft tot de plaats(en) waar de werkzaamheden moeten worden verricht</li>
      <li>De plaats waar de werkzaamheden verricht moeten worden veilig is</li>
    </ul>

    <h2>6. Betaling</h2>
    <ul>
      <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum</li>
      <li>Bij niet tijdige betaling is opdrachtgever in verzuim</li>
      <li>Bij niet tijdige betaling is opdrachtgever wettelijke rente verschuldigd</li>
    </ul>

    <h2>7. Garantie</h2>
    <p>Op al onze werkzaamheden wordt garantie verleend volgens de voorwaarden van het garantiecertificaat.</p>

    <h2>8. Aansprakelijkheid</h2>
    <p>Opdrachtnemer is aansprakelijk voor schade die opdrachtgever lijdt en die het rechtstreeks en uitsluitend gevolg is van een aan opdrachtnemer toe te rekenen tekortkoming.</p>

    <h2>9. Contact</h2>
    <p>Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via:</p>
    <ul>
      <li>E-mail: info@schildersbedrijf040.nl</li>
      <li>Telefoon: 06-38903004</li>
      <li>Adres: Jacob van Campenweg 22, 5624CD Eindhoven</li>
    </ul>
  </div>
`;

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div dangerouslySetInnerHTML={{ __html: termsContent }} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}