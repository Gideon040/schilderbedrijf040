import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Algemeen',
    questions: [
      {
        question: 'Wat is de levertijd van een offerte?',
        answer: 'Na een bezoek ter plaatse ontvangt u binnen 2-3 werkdagen een gedetailleerde offerte.',
      },
      {
        question: 'Werken jullie met eigen personeel?',
        answer: 'Ja, wij werken uitsluitend met eigen, vakkundig opgeleid personeel om de hoogste kwaliteit te garanderen.',
      },
      {
        question: 'In welke regio zijn jullie actief?',
        answer: 'Wij zijn actief in Eindhoven en omstreken, waaronder Veldhoven, Nuenen, Best, Son en Breugel.',
      },
    ],
  },
  {
    category: 'Diensten',
    questions: [
      {
        question: 'Welke schilderdiensten bieden jullie aan?',
        answer: 'Wij bieden binnen- en buitenschilderwerk, behangwerk, houtrot sanering, latex spuiten en kleuradvies.',
      },
      {
        question: 'Kunnen jullie ook spoed opdrachten uitvoeren?',
        answer: 'Ja, voor spoedeisende situaties proberen we altijd een passende oplossing te vinden.',
      },
    ],
  },
  {
    category: 'Werkwijze',
    questions: [
      {
        question: 'Hoe gaan jullie om met bescherming van meubels en vloeren?',
        answer: 'We beschermen uw interieur zorgvuldig met speciale afdekfolies en werken altijd zeer netjes.',
      },
      {
        question: 'Werken jullie ook in bewoonde situaties?',
        answer: 'Ja, we hebben ruime ervaring met werken in bewoonde situaties en zorgen voor minimale overlast.',
      },
    ],
  },
  {
    category: 'Kosten',
    questions: [
      {
        question: 'Wat zijn de kosten van een schilderbeurt?',
        answer: 'De kosten zijn afhankelijk van verschillende factoren. We maken graag een vrijblijvende offerte op maat.',
      },
      {
        question: 'Bieden jullie garantie op het werk?',
        answer: 'Ja, we bieden uitgebreide garantie op zowel materiaal als arbeid.',
      },
    ],
  },
];

export function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemIndex = categoryIndex * 100 + index;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}