import React, { useState } from 'react';
import TextEditor from './TextEditor';

const CardCreatorForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : '');
  const [cardText, setCardText] = useState(props.cardText ? props.cardText : '');
  const [cost, setCost] = useState(0);
  const [flavorText, setFlavorText] = useState('');
  const [rarity, setRarity] = useState('');
  const [type, setType] = useState('');
  const [attack, setAttack] = useState(0);
  const [health, setHealth] = useState(0);
  const [armor, setArmor] = useState(0);
  const [durability, setDurability] = useState(0);
  const [expansionId, setExpansionId] = useState(1); // Default value as per your schema
  const [isGeneratedCard, setIsGeneratedCard] = useState(false);
  const [deckSizeModifierType, setDeckSizeModifierType] = useState('None'); // Default value as per your schema
  const [deckSizeModifierValue, setDeckSizeModifierValue] = useState(0);
  const [cardArt, setCardArt] = useState(null); // For handling image upload
  const [expansions, setExpansions] = useState([{ id: 0, name: 'Base Game' }]);

  const getExpansions = async (e) => {
    // Assuming expansions come from an API or other source
    const newExpansions = [{ id: 0, name: 'Base Game' }];
    setExpansions(newExpansions);
  };

  const ExpansionDropdown = () => {
    return (
      <select onChange={() => {}}>
        {expansions.map((expansion) => (
          <option key={expansion.id} value={expansion.id}>
            {expansion.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <form onSubmit={props.onSubmit}>
      {/* Other form fields */}
      <div>
        <label>Card Text:</label>
        <TextEditor
          title="Card Text"
          onChange={(content) => setCardText(content)} // Update cardText when the content changes
          content={cardText} // Set the initial content
        />
      </div>

      <div>
        <label>Flavor Text:</label>
        <TextEditor
          title="Flavor Text"
          onChange={(content) => setFlavorText(content)} // Update flavorText when the content changes
          content={flavorText} // Set the initial content
        />
      </div>

      {/* Other form fields */}

      <input type="submit" value="Create Card" />
    </form>
  );
};

export default CardCreatorForm;